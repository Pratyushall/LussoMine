// app/api/start-vision/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs"; // make sure we're not on 'edge'

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      contact,
      city,
      kitchenVibe,
      finishes = [],
      wardrobe,
      shutters,
      partitions,
      website, // honeypot
    } = body;

    // honeypot: silently succeed for bots
    if (website) return NextResponse.json({ ok: true });

    // ⬇️ NEW: options-object style constructor
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      ),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;
    const values = [
      [
        new Date().toISOString(),
        name,
        contact,
        city,
        kitchenVibe,
        finishes.join(", "),
        wardrobe,
        shutters,
        partitions,
      ],
    ];

    // ⬇️ Use requestBody with modern googleapis
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Responses!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
