import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getEnrollmentTrendByCategory();
  return Response.json(data);
    }
    catch (error) {
        console.error("Error fetching enrollment trend data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}