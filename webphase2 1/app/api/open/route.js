import studentManagement from "../../repo/studentManagement";

export async function GET() {
  const openClasses = await studentManagement.getOpenClasses();
  return Response.json(openClasses, { status: 200 });
}
