import studentManagement from "../../../../repo/studentManagement";

export async function GET(req, { params }) {
  const courses = await studentManagement.getCourseByCat(params.category);
  return Response.json(courses, { status: 200 });
}
