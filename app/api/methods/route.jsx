import Method from "@/models/method";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();
    const method = await Method.find({});
    if (method.length === 0) {
      return new Response("method not found", { status: 404 });
    }
    return new Response(JSON.stringify(method), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data", { status: 500 });
  }
};
