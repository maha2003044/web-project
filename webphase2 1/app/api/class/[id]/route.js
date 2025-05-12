import studentManagement from "../../../repo/studentManagement";

export async function GET(req, { params }) {
  const classItem = await studentManagement.getClass(params.id);
  return Response.json(classItem, { status: 200 }); 
}

export async function PUT(req, { params }) {
  const data = await req.json();
  const updated = await studentManagement.updateClass(params.id, data);
  return Response.json(updated, { status: 200 });
}

export async function DELETE(req, { params }) {
  const message = await studentManagement.deleteClass(params.id);
  return Response.json(message, { status: 200 });
}