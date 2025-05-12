import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getStudentsCountByCourse();
  return Response.json(data);
    }
    catch (error) {
        console.error("Error fetching students count by course data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}