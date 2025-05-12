// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const fs = require('fs-extra')
const path = require('path')

const prisma = new PrismaClient()

async function seed() {
  console.log("Seeding Started.....");

  try {
    //clear the existing data
    await prisma.studentCourse.deleteMany({})
    await prisma.class.deleteMany({})
    await prisma.instructor.deleteMany({})
    await prisma.course.deleteMany({})
    await prisma.student.deleteMany({})

    const classes = await fs.readJSON(path.join(process.cwd(), 'app/data/classes.json'))
    const courses = await fs.readJSON(path.join(process.cwd(), 'app/data/courses.json'))
    const instructors = await fs.readJSON(path.join(process.cwd(), 'app/data/instructors.json'))
    const students = await fs.readJSON(path.join(process.cwd(), 'app/data/students.json'))
    
    console.log("Creating courses...");
    for (const course of courses)
      await prisma.course.create({ data: course })
      
    console.log("Creating instructors...");
    for (const instructor of instructors)
      await prisma.instructor.create({ data: instructor })
      
    console.log("Creating classes...");
    for (const cls of classes)
      await prisma.class.create({ data: cls })
      
    console.log("Creating students...");
    for (const student of students)
      await prisma.student.create({ data: student })
      
    console.log("Creating student enrollments...");
    
  

    const studentIds = await prisma.student.findMany({ select: { studentId: true }});
    const courseIds = await prisma.course.findMany({ select: { couId: true }});
    const classIds = await prisma.class.findMany({ select: { id: true }});
    
    //track the unique combinations to avoid duplicates
    const processedEnrollments = new Set();
    
    //sample of statuses and grades
    const statuses = ['enrolled', 'completed', 'failed', 'dropped'];
    const grades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F', null];
    
    //create 500 enrollments
    const enrollmentsToCreate = 500;
    let successfulEnrollments = 0;
    let attempts = 0;
    const maxAttempts = 500; //Limit
    
    while (successfulEnrollments < enrollmentsToCreate && attempts < maxAttempts) {
      attempts++;
      
      //Pick random IDs
      const studentId = studentIds[Math.floor(Math.random() * studentIds.length)].studentId;
      const courseId = courseIds[Math.floor(Math.random() * courseIds.length)].couId;
      const classId = classIds[Math.floor(Math.random() * classIds.length)].id;
      
      const enrollmentKey = `${studentId}-${courseId}-${classId}`;
      
      //skip if already processed
      if (processedEnrollments.has(enrollmentKey)) {
        continue;
      }
      
      processedEnrollments.add(enrollmentKey);
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      
      //only completed or failed courses have grades
      let grade = null;
      if (status === 'completed' || status === 'failed') {
        grade = grades[Math.floor(Math.random() * (grades.length - 1))]; 
      }
      
      try {
        await prisma.studentCourse.create({
          data: {
            enrollmentDate: new Date(),
            status,
            grade,
            student: { connect: { studentId } },
            course: { connect: { couId: courseId } },
            class: { connect: { id: classId } }
          }
        });
        
        successfulEnrollments++;
        if (successfulEnrollments % 10 === 0) {
          console.log(`Created ${successfulEnrollments} enrollments...`);
        }
      } catch (error) {
        console.log(`Error creating enrollment: ${error.message}`);
      }
    }

    console.log(`Database seeding completed successfully. Created ${successfulEnrollments} enrollments.`);
  } catch (error) {
    console.error("Seeding Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch((e) => {
  console.error("Seeding Error:", e);
  process.exit(1);
});