import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getDepartmentPerformance();
  return Response.json(data);
    }
    catch (error) {
        console.error("Error fetching department performance data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}