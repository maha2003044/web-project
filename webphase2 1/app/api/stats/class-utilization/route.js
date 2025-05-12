import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getClassUtilization();
  return Response.json(data);
    }
    catch (error) {
        console.error("Error fetching class utilization data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}