const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use('/data', express.static(__dirname + '/data')); //frontend can access JSON

app.use(cors());
app.use(express.json()); // for reading JSON body

//API ROUTES

//Route:loads all courses
app.get("/api/courses", (req, res) => {
  const data = fs.readFileSync("../data/courses.json"); //Reads the course date from the file
  res.json(JSON.parse(data)); //sends the JSON response to the client
});
//Route:loads all users 
app.get("/api/users", (req, res) => {
  const data = fs.readFileSync("../data/users.json"); //Reads the user data from the file
  res.json(JSON.parse(data)); //sends the JSON response to the client
});
//route:loads all student reg
app.get("/api/student-registrations", (req, res) => {
  const data = fs.readFileSync("../data/studentRegistrations.json"); //reads date from the registrationg 
  res.json(JSON.parse(data)); //sends the json response to the client
});

//route:registers a student into a course 
app.post("/api/register", (req, res) => {
  const { username, courseName, instructor } = req.body; //takes the submitted date

  const filepath = "../data/studentRegistrations.json"; //reg file
  const data = JSON.parse(fs.readFileSync(filepath)); //loads the exisiting reg data

  if (!data[username]) {
    data[username] = []; //create a new list for this student if it doesnt already exist
  }

  //adds a new course reg with a status:pending
  data[username].push({ name: courseName, instructor, status: "pending" });

  fs.writeFileSync(filepath, JSON.stringify(data, null, 2)); //saves the new updates data
  res.json({ message: "Student registered successfully" }); //respond to client
});

//route:updates the status of the course class so like validates or cancels 
app.put("/api/update-class", (req, res) => {
    const { courseName, classIndex, newStatus } = req.body; //extracts the date from thr request
  
    const coursesFile = "../data/courses.json"; //path to course file
    const regFile = "../data/studentRegistrations.json"; //path to reg
  
    const courses = JSON.parse(fs.readFileSync(coursesFile)); //loads the course date
    const registrations = JSON.parse(fs.readFileSync(regFile)); //load reg data 
  
    const course = courses.find(c => c.cname === courseName); //find course by name
    if (!course || !course.classes[classIndex]) {
      return res.status(404).json({ message: "Class not found." }); //if class not found
    }
  
    // update class status (in progress or cancelled)
    course.classes[classIndex].status = newStatus;
  
    // update related student registrations
    for (let student in registrations) {
      const cls = course.classes[classIndex]; //get the current class
      registrations[student].forEach(reg => {
        if (
          reg.name === courseName &&
          reg.instructor === cls.instructor &&
          reg.status === "pending"
        ) {
          reg.status = (newStatus === "in-progress") ? "in-progress" : "rejected";
        }
      });
      
    }
  
    //Saves updated data
    fs.writeFileSync(coursesFile, JSON.stringify(courses, null, 2));
    fs.writeFileSync(regFile, JSON.stringify(registrations, null, 2));
  
    res.json({ message: `Class status updated to ${newStatus}` }); //respond to admin
  });
  
  //route: creates a new course
  app.post("/api/courses", (req, res) => {
    const newCourse = req.body; //get the course data from request
    const file = "../data/courses.json"; //file path
  
    try {
      const data = fs.readFileSync(file, "utf8"); //read as a string
      const courses = JSON.parse(data);
  
      // Push new course with an empty classes array
      courses.push({
        ...newCourse,
        classes: []
      });
  
      fs.writeFileSync(file, JSON.stringify(courses, null, 2)); //saves updated courses
      res.json({ message: "Course added successfully" });
    } catch (error) {
      console.error("Error adding course:", error);
      res.status(500).json({ message: "Failed to add course" });
    }
  });
  
  //adds a class to an exitising course
  app.post("/api/add-class", (req, res) => {
    const { cname, instructor, limit, schedule } = req.body; //gets class info
    const file = "../data/courses.json"; //course file
  
    try {
      const data = fs.readFileSync(file, "utf8");
      const courses = JSON.parse(data);
  
      const course = courses.find(c => c.cname === cname); //find course
  
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      // add new class to course
      course.classes.push({
        instructor,
        limit,
        enrolled: 0,
        status: "pending",
        schedule
      });
  
      fs.writeFileSync(file, JSON.stringify(courses, null, 2)); //save
      res.json({ message: "Class added successfully" });
    } catch (error) {
      console.error("Error adding class:", error);
      res.status(500).json({ message: "Failed to add class" });
    }
  });
  //route: gets all the classes for a particular instructor 
  app.get("/api/instructor-classes/:instructor", (req, res) => {
    const instructorName = decodeURIComponent(req.params.instructor); //get instructor name 
    const courses = JSON.parse(fs.readFileSync("../data/courses.json")); //load courses
  
    const instructorClasses = []; //stores instructors classes
  
    courses.forEach(course => {
      course.classes.forEach(cls => {
        if (cls.instructor === instructorName && cls.status === "in-progress") {
          instructorClasses.push({
            courseName: course.cname,
            classInfo: cls
          });
        }
      });
    });
  
    res.json(instructorClasses); //returns the instructors classes
  });

  //route:allows the instructor to submit final grades
  app.post("/api/submit-grade", (req, res) => {
    const { username, courseName, grade } = req.body; //takes the grade info
    const usersPath = "../data/users.json"; //path to users file
  
    try {
      const users = JSON.parse(fs.readFileSync(usersPath)); //load the user data
      const student = users.find(u => u.username === username && u.role === "student"); //find student
  
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      if (!student.completedCourses) {
        student.completedCourses = {}; //initialize if missing
      }
  
      student.completedCourses[courseName] = grade; //assign the students grade
  
      fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
      res.json({ message: "Grade submitted successfully" });
    } catch (error) {
      console.error("Error submitting grade:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // route:published courses for instructors to view
app.get("/api/published-courses", (req, res) => {
    const data = fs.readFileSync("../data/publishedCourses.json"); //reads
    res.json(JSON.parse(data));
  });
  // route:instructor epxress their intrest in acourse
  app.post("/api/express-interest", (req, res) => {
    const { instructor, course } = req.body; //extracts the intrest of instructors
    const file = "../data/instructorsIntrests.json"; //file path
  
    try {
      const data = JSON.parse(fs.readFileSync(file));
      data.push({ instructor, course }); //add new intrests 
      fs.writeFileSync(file, JSON.stringify(data, null, 2)); //saves
      res.json({ message: "Interest submitted!" });  //responds
    } catch (error) { //error
      console.error("Error writing interest:", error);
      res.status(500).json({ message: "Failed to submit interest" });
    }
  });
  //route admin assigns the instructors to a course
  app.post("/api/assign-instructor", (req, res) => {
    const { courseName, instructorName } = req.body; //takes the assignment data
  
    const file = "../data/courses.json";
  
    try {
      const courses = JSON.parse(fs.readFileSync(file));
      const course = courses.find(c => c.cname === courseName); //finds the course
  
      if (!course) {
        return res.status(404).json({ message: "Course not found" }); //error if the course is missing
      }
  
      // Add the class if none exists
      if (!course.classes) course.classes = [];
      
      //add instructor as a new class
      course.classes.push({
        instructor: instructorName,
        limit: 5, 
        enrolled: 0,
        status: "pending"
      });
  
      fs.writeFileSync(file, JSON.stringify(courses, null, 2)); //save
      res.json({ message: `Instructor ${instructorName} assigned to ${courseName}` }); //respond
    } catch (error) {
      console.error("Error assigning instructor:", error);
      res.status(500).json({ message: "Failed to assign instructor" });
    }
  });
  
  
  
  
  
  
  
  
  
//start the server 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
