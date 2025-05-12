import studentManagement from "../../repo/studentManagement";

export async function GET(req, { params }) {
  const course = await studentManagement.getAllCourses()
  return Response.json(course, { status: 200 });
}

export async function POST(req){
    const courseData = await req.json();
    const newCourse = await studentManagement.createCourse(courseData);
    return Response.json(newCourse, { status: 201 });
}