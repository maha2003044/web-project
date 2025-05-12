import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getFailureRateByCategory();
  return Response.json(data);
    }
    catch (error) {
        console.error("Error fetching failure rate by category:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}