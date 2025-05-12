import studentManagement from "../../../repo/studentManagement";


export async function GET(req, { params }) {
  const course = await studentManagement.getCourse(params.id);
  return Response.json(course, { status: 200 });
}

export async function PUT(req, { params }) {
  const data = await req.json();
  const updated = await studentManagement.updateCourse(params.id, data);
  return Response.json(updated, { status: 200 });
}

export async function DELETE(req, { params }) {
  const message = await studentManagement.deleteCourse(params.id);
  return Response.json(message, { status: 200 });
}
