import studentManagement from "../../../repo/studentManagement";

export async function GET() {
    try{
  const data = await studentManagement.getTopInstructorsByClassCount();
  return Response.json(data);
    }
    catch (error) {
        console.error("Error fetching top instructors data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}