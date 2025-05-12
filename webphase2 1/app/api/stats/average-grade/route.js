import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getAverageGradeByCourse();
  return Response.json(data)
}
    catch (error) {
        console.error("Error fetching average grade data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}