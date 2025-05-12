import studentManagement from "../../repo/studentManagement";


export async function GET() {
  const classes = await studentManagement.getAllClasses();
  return Response.json(classes, { status: 200 });
}

export async function POST(req) {
  const data = await req.json();
  const newClass = await studentManagement.createClass(data);
  return Response.json(newClass, { status: 201 });
}

