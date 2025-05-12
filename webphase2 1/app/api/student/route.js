import studentManagement from "../../repo/studentManagement";

export async function GET(){
    const students = await studentManagement.getAllStudents()
    return Response.json(students, { status: 200 })
}

export async function POST(req) {
    const studentData = await req.json();
    const newStudent = await studentManagement.createStudent(studentData);
    return Response.json(newStudent, { status: 201 });
}
