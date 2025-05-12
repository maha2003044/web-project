import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class studentManagementRepo {
  //Gets all students
  async getAllStudents() {
    return await prisma.student.findMany(); //api/student
  }

  //Gets all instructors
  async getAllInstructors() {
    return await prisma.instructor.findMany(); //api/instructors
  }

  //Gets all courses
  async getAllCourses() {
    return await prisma.course.findMany(); //api/courses
  }

  //Gets all classes
  async getAllClasses() {
    return await prisma.class.findMany(); //api/class
  }

  //Get student by Id
  async getStudent(id) {
    return await prisma.student.findUnique({
      where: { studentId: parseInt(id) }, //api/student/[id]
    });
  }

  //Get instructor by Id
  async getInstructor(id) {
    return await prisma.instructor.findUnique({ 
      where: { insId: parseInt(id) }, //api/instructor/[id]
    });
  }

  //Get course by Id
  async getCourse(id) {
    return await prisma.course.findUnique({
      where: { couId: parseInt(id) }, //api/course/[id]
    });
  }

  //Get class by Id
  async getClass(id) {
    return await prisma.class.findUnique({
      where: { id: parseInt(id) }, //api/class/[id]
    });
  }

  //Adds a student
  async createStudent(studentData) {
    return await prisma.student.create({ data: studentData }); //api/student
  }

  //Adds instructor
  async createInstructor(instructorData) {
    return await prisma.instructor.create({ data: instructorData }); //api/instructor
  }

  //Adds a course
  async createCourse(courseData) {
    return await prisma.course.create({ data: courseData }); //api/course
  }

  //Adds a class
  async createClass(classData) {
    return await prisma.class.create({ data: classData }); //api/class
  }

  //Get students by year
  async getStudentsByYear(year) {
    return await prisma.student.findMany({
      where: { year: parseInt(year) },
    });
  }

  //update student info
  async updateStudent(id, updatedData) {
    return await prisma.student.update({
      data: updatedData,
      where: { studentId: parseInt(id) }, //api/student/[id]
    });
  }

  //updates instructor
  async updateInstructor(id, updatedData) {
    return await prisma.instructor.update({
      data: updatedData,
      where: { insId: parseInt(id) }, //api/instructor/[id]
    });
  }

  //updates course
  async updateCourse(id, updatedData) {
    return await prisma.course.update({
      data: updatedData,
      where: { couId: parseInt(id) }, //api/course/[id]
    });
  }

  //updates class
  async updateClass(id, updatedData) {
    return await prisma.class.update({
      data: updatedData,
      where: { id: parseInt(id) }, //api/class/[id]
    });
  }

  //deletes a student
  async deleteStudent(id) {
    return await prisma.student.delete({
      where: { studentId: parseInt(id) }, //api/student/[id]
    });
  }

  //deletes a instructor
  async deleteInstructor(id) {
    return await prisma.instructor.delete({
      //api/instructor/[id]
      where: { insId: parseInt(id) },
    });
  }


  //Get open classes
  async getOpenClasses() {
    return await prisma.class.findMany({
      //api/open
      where: { status: "open" },
    });
  }

  //Get course by cat
  async getCourseByCat(category) {
    return await prisma.course.findMany({
      where: { category },
    });
  }


  // =============== STATISTICS METHODS =============== //

  // 1. Total students per year
  async getStudentsCountByYear() {
    return await prisma.student.groupBy({
      by: ["year"],
      _count: {
        studentId: true,
      },
      orderBy: {
        year: "asc",
      },
    });
  }

  // 2. Total students per course category
  async getStudentsCountByCategory() {
    try {
      const courses = await prisma.course.findMany({
        select: {
          couId: true,
          category: true,
        },
      });

      const categoryMap = {};
      for (const course of courses) {
        const category = course.category;
        if (!categoryMap[category]) {
          categoryMap[category] = new Set();
        }
        const enrollments = await prisma.studentCourse.findMany({
          where: {
            courseId: course.couId, 
          },
          select: {
            studentId: true,
          },
        });

        for (const enrollment of enrollments) {
          categoryMap[category].add(enrollment.studentId);
        }
      }

      return Object.entries(categoryMap)
        .map(([category, studentSet]) => ({
          category,
          studentCount: studentSet.size,
        }))
        .sort((a, b) => b.studentCount - a.studentCount);
    } catch (error) {
      console.error("Error in getStudentsCountByCategory:", error);
      return [];
    }
  }

  // 3. Total students per course
  async getStudentsCountByCourse() {
    try {
      const courses = await prisma.course.findMany({
        select: {
          couId: true,
          cname: true,
        },
      });

      const results = [];
      for (const course of courses) {
        
        const enrollments = await prisma.studentCourse.findMany({
          where: {
            courseId: course.couId, 
          },
          select: {
            studentId: true,
          },
          distinct: ["studentId"],
        });

        results.push({
          courseName: course.cname,
          studentCount: enrollments.length,
        });
      }

      return results.sort((a, b) => b.studentCount - a.studentCount);
    } catch (error) {
      console.error("Error in getStudentsCountByCourse:", error);
      return [];
    }
  }
  // 4. Top 3 most popular courses
  async getTopThreeCourses() {
    try {
      const allCourses = await this.getStudentsCountByCourse();
      return allCourses.slice(0, 3);
    } catch (error) {
      console.error("Error in getTopThreeCourses:", error);
      return [];
    }
  }

  // 5. Failure rate per course - Fixed version
  async getFailureRateByCourse() {
    try {
      
      const courses = await prisma.course.findMany();
      const results = [];

      for (const course of courses) {
      
        const totalEnrollments = await prisma.studentCourse.count({
          where: {
            courseId: course.couId, 
          },
        });

       
        const failedEnrollments = await prisma.studentCourse.count({
          where: {
            courseId: course.couId, 
            status: "failed",
          },
        });

        if (totalEnrollments > 0) {
          const failureRate = (failedEnrollments / totalEnrollments) * 100;
          results.push({
            courseName: course.cname,
            failedCount: failedEnrollments,
            totalCount: totalEnrollments,
            failureRate: parseFloat(failureRate.toFixed(2)),
          });
        }
      }

      return results.sort((a, b) => b.failureRate - a.failureRate);
    } catch (error) {
      console.error("Error in getFailureRateByCourse:", error);
      return [];
    }
  }
  // 6. Failure rate per course category
  async getFailureRateByCategory() {
    try {
      const categories = await prisma.course.groupBy({
        by: ["category"],
      });

      const results = [];

      for (const cat of categories) {
        const category = cat.category;
      
        const coursesInCategory = await prisma.course.findMany({
          where: {
            category,
          },
          select: {
            couId: true,
          },
        });

        const courseIds = coursesInCategory.map((c) => c.couId);

        const totalEnrollments = await prisma.studentCourse.count({
          where: {
            courseId: {
             
              in: courseIds,
            },
          },
        });

        const failedEnrollments = await prisma.studentCourse.count({
          where: {
            courseId: {
             
              in: courseIds,
            },
            status: "failed",
          },
        });

        if (totalEnrollments > 0) {
          const failureRate = (failedEnrollments / totalEnrollments) * 100;
          results.push({
            category,
            failedCount: failedEnrollments,
            totalCount: totalEnrollments,
            failureRate: parseFloat(failureRate.toFixed(2)),
          });
        }
      }

      return results.sort((a, b) => b.failureRate - a.failureRate);
    } catch (error) {
      console.error("Error in getFailureRateByCategory:", error);
      return [];
    }
  }
  // 7. Average grade per course
  async getAverageGradeByCourse() {
    try {
    
      const gradeValues = {
        A: 4.0,
        "A-": 3.7,
        "B+": 3.3,
        B: 3.0,
        "B-": 2.7,
        "C+": 2.3,
        C: 2.0,
        "C-": 1.7,
        "D+": 1.3,
        D: 1.0,
        F: 0.0,
      };

     
      const courses = await prisma.course.findMany();
      const results = [];

      for (const course of courses) {
        
        const completedEnrollments = await prisma.studentCourse.findMany({
          where: {
            courseId: course.couId, 
            status: "completed",
            grade: {
              not: null,
            },
          },
          select: {
            grade: true,
          },
        });

        // Calculate average GPA
        let totalGPA = 0;
        let validGrades = 0;

        for (const enrollment of completedEnrollments) {
          if (enrollment.grade && enrollment.grade in gradeValues) {
            totalGPA += gradeValues[enrollment.grade];
            validGrades++;
          }
        }

        if (validGrades > 0) {
          const averageGPA = totalGPA / validGrades;
          results.push({
            courseName: course.cname,
            averageGPA: parseFloat(averageGPA.toFixed(2)),
            studentCount: validGrades,
          });
        }
      }

      return results.sort((a, b) => b.averageGPA - a.averageGPA);
    } catch (error) {
      console.error("Error in getAverageGradeByCourse:", error);
      return [];
    }
  }

  // 8. Course enrollment trend by category
  async getEnrollmentTrendByCategory() {
    try {
     
      const enrollments = await prisma.studentCourse.findMany({
        select: {
          enrollmentDate: true,
          course: {
            select: {
              category: true,
            },
          },
        },
      });

      const trendData = {};

      enrollments.forEach((enrollment) => {
        const year = new Date(enrollment.enrollmentDate)
          .getFullYear()
          .toString();
        const category = enrollment.course?.category || "Unknown";

        const key = `${category}-${year}`;
        trendData[key] = (trendData[key] || 0) + 1;
      });

      const results = [];
      for (const key in trendData) {
        const [category, year] = key.split("-");
        results.push({
          category,
          year,
          enrollments: trendData[key],
        });
      }

      return results.sort((a, b) => {
    
        if (a.category !== b.category) {
          return a.category.localeCompare(b.category);
        }
        return a.year.localeCompare(b.year);
      });
    } catch (error) {
      console.error("Error in getEnrollmentTrendByCategory:", error);
      return [];
    }
  }

  // 9. Top instructors by class count
  async getTopInstructorsByClassCount() {
    try {
      const instructors = await prisma.instructor.findMany();
      const results = [];

      for (const instructor of instructors) {
        const classCount = await prisma.class.count({
          where: {
            instructor: instructor.name,
          },
        });

        results.push({
          instructorName: instructor.name,
          department: instructor.department,
          classCount,
        });
      }

      return results.sort((a, b) => b.classCount - a.classCount).slice(0, 10);
    } catch (error) {
      console.error("Error in getTopInstructorsByClassCount:", error);
      return [];
    }
  }

  // 10. Course completion rate by year level
  async getCourseCompletionRateByYear() {
    try {
      
      const studentYears = await prisma.student.groupBy({
        by: ["year"],
      });

      const results = [];

      for (const yearGroup of studentYears) {
        const year = yearGroup.year;

        const studentIds = await prisma.student.findMany({
          where: { year },
          select: { studentId: true },
        });

        const studentIdList = studentIds.map((s) => s.studentId);

       
        const totalEnrollments = await prisma.studentCourse.count({
          where: {
            studentId: {
              in: studentIdList,
            },
          },
        });

        const completedEnrollments = await prisma.studentCourse.count({
          where: {
            studentId: {
              in: studentIdList,
            },
            status: "completed",
          },
        });

        if (totalEnrollments > 0) {
          const completionRate =
            (completedEnrollments / totalEnrollments) * 100;
          results.push({
            year,
            completedCount: completedEnrollments,
            totalCount: totalEnrollments,
            completionRate: parseFloat(completionRate.toFixed(2)),
          });
        }
      }

      return results.sort((a, b) => a.year - b.year);
    } catch (error) {
      console.error("Error in getCourseCompletionRateByYear:", error);
      return [];
    }
  }

  // 11. Department performance comparison
  async getDepartmentPerformance() {
    try {
      
      const departments = await prisma.instructor.groupBy({
        by: ["department"],
      });

      const results = [];
      const gradeValues = {
        A: 4.0,
        "A-": 3.7,
        "B+": 3.3,
        B: 3.0,
        "B-": 2.7,
        "C+": 2.3,
        C: 2.0,
        "C-": 1.7,
        "D+": 1.3,
        D: 1.0,
        F: 0.0,
      };

      for (const dept of departments) {
        const department = dept.department;

   
        const instructors = await prisma.instructor.findMany({
          where: { department },
          select: { name: true },
        });

        const instructorNames = instructors.map((i) => i.name);

        const classes = await prisma.class.findMany({
          where: {
            instructor: {
              in: instructorNames,
            },
          },
          select: { id: true },
        });

        const classIds = classes.map((c) => c.id);

        
        const studentCount = await prisma.studentCourse.groupBy({
          by: ["studentId"],
          where: {
            classId: {
              in: classIds,
            },
          },
        });

        const completedCourses = await prisma.studentCourse.findMany({
          where: {
            classId: {
              in: classIds,
            },
            status: "completed",
            grade: {
              not: null,
            },
          },
          select: { grade: true },
        });

        let totalGPA = 0;
        let validGrades = 0;

        for (const course of completedCourses) {
          if (course.grade && course.grade in gradeValues) {
            totalGPA += gradeValues[course.grade];
            validGrades++;
          }
        }

        results.push({
          department,
          avgGPA:
            validGrades > 0
              ? parseFloat((totalGPA / validGrades).toFixed(2))
              : null,
          classCount: classes.length,
          studentCount: studentCount.length,
        });
      }

      return results.sort((a, b) => {
        if (a.avgGPA === null && b.avgGPA === null) return 0;
        if (a.avgGPA === null) return 1;
        if (b.avgGPA === null) return -1;
        return b.avgGPA - a.avgGPA;
      });
    } catch (error) {
      console.error("Error in getDepartmentPerformance:", error);
      return [];
    }
  }

  // 12. Class utilization (enrolled students vs. capacity)
  async getClassUtilization() {
    try {
      
      const classes = await prisma.class.findMany();
      const results = [];

      for (const cls of classes) {
      
        const course = await prisma.course.findFirst({
          where: { cname: cls.course },
          select: { cname: true },
        });

        if (cls.limit > 0) {
          const utilizationPercentage = (cls.enrolled / cls.limit) * 100;

          results.push({
            courseName: course ? course.cname : "Unknown",
            instructor: cls.instructor,
            enrolled: cls.enrolled,
            classLimit: cls.limit, 
            utilizationPercentage: parseFloat(utilizationPercentage.toFixed(2)),
          });
        }
      }

      return results.sort(
        (a, b) => b.utilizationPercentage - a.utilizationPercentage
      );
    } catch (error) {
      console.error("Error in getClassUtilization:", error);
      return [];
    }
  }
}

export default new studentManagementRepo();
