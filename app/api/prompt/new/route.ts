import Prompt from "@/models/Prompt";
import { connectToDB } from "@/libs/database";

export const POST = async (req: Request) => {
  const { prompt, userId, tag } = await req.json();

  try {
    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to create a new prompt" }),
      {
        status: 500,
      }
    );
  }
};
