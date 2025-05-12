import studentManagement from "../../../repo/studentManagement";

export async function GET(req, { params }) {
  const instructor = await studentManagement.getInstructor(params.id);
  return Response.json(instructor, { status: 200 });
}

export async function PUT(req, { params }) {
  const data = await req.json();
  const updated = await studentManagement.updateInstructor(params.id, data);
  return Response.json(updated, { status: 200 });
}

export async function DELETE(req, { params }) {
  const message = await studentManagement.deleteInstructor(params.id);
  return Response.json(message, { status: 200 });
}
