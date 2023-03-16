import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const userAgent = req.headers.get("User-Agent");
  return new Response(
    JSON.stringify({
      message: `Hi! Hello "${userAgent}"`,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
