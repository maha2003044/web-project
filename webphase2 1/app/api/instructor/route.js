import studentManagement from "../../repo/studentManagement"

export async function GET() {
    const instructors = await studentManagement.getAllInstructors()
    return Response.json(instructors, { status: 200 })  
}

export async function POST(req){
    const instructorData = await req.json();
    const newInstructor = await studentManagement.createInstructor(instructorData);
    return Response.json(newInstructor, { status: 201 });
}




























