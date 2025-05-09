import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "Some json" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Sth went wrong", {
      status: 500,
    });
  }
};
