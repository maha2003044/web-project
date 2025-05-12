import studentManagement from "../../../repo/studentManagement";


export async function GET(req, { params }) {
  const id = params.id; 
  const student = await studentManagement.getStudent(id);
  return Response.json(student, { status: 200 });
}

export async function PUT(req, { params }){
    const body = await req.json();
    const updated = await studentManagement.updateStudent(params.id, body);
    return Response.json(updated, { status: 200 });
}

export async function DELETE(req, { params }){
    const studentId = parseInt(params.id);
    const message = await studentManagement.deleteStudent(studentId);
    return Response.json(message, { status: 200 });
}











