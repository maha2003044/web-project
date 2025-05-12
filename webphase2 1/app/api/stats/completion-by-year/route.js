import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getCourseCompletionRateByYear();
  return Response.json(data);
    }
    catch (error) {
        console.error("Error fetching course completion rate by year:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}