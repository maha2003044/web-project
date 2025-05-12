import studentManagement from "../../../../repo/studentManagement";


export async function GET(req, { params }) {
  const students = await studentManagement.getStudentsByYear(params.year);
  return Response.json(students, { status: 200 });
}
