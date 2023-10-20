import Offers from "@/models/offers";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();
    const offers = await Offers.find({});

    if (!offers) {
      return new Response("offers not found", { status: 404 });
    }
    return new Response(JSON.stringify(offers), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch data ", { status: 500 });
  }
};
