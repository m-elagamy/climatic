import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const API_KEY = process.env.WEATHER_API_KEY;
  const query = req.nextUrl.searchParams.get("query");

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Weather API key is missing" },
      { status: 500 },
    );
  }

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`,
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Weather API returned an error: ${response.statusText}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
