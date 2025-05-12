import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getFailureRateByCourse();
  return Response.json(data);
    }
    catch (error) {
        console.error("Error fetching failure rate by course:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}