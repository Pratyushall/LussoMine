import { NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Honeypot check
    if (data.website) return NextResponse.json({ ok: true });

    const {
      name = "",
      contact = "",
      city = "",
      kitchenVibe = "",
      finishes = [] as string[],
      wardrobe = "",
      shutters = "",
      partitions = "",
    } = data || {};

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Missing name or contact" },
        { status: 400 }
      );
    }

    // 1) Send admin email
    const ADMIN_TO = process.env.EMAIL_TO!;
    const FROM = process.env.EMAIL_FROM!; // e.g. "Lusso <hello@yourdomain.com>"

    const html = `
      <div>
        <h2>New Start Vision submission</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Contact:</b> ${escapeHtml(contact)}</p>
        <p><b>City:</b> ${escapeHtml(city)}</p>
        <p><b>Kitchen vibe:</b> ${escapeHtml(kitchenVibe)}</p>
        <p><b>Finishes:</b> ${finishes.map(escapeHtml).join(", ")}</p>
        <p><b>Wardrobe:</b> ${escapeHtml(wardrobe)}</p>
        <p><b>Shutters:</b> ${escapeHtml(shutters)}</p>
        <p><b>Partitions:</b> ${escapeHtml(partitions)}</p>
        <p style="color:#888;margin-top:12px;">Sent ${new Date().toLocaleString()}</p>
      </div>
    `;

    if (process.env.RESEND_API_KEY && FROM && ADMIN_TO) {
      await resend.emails.send({
        from: FROM,
        to: [ADMIN_TO],
        subject: "Lusso — Start Vision submission",
        html,
      });
    }

    // 2) Auto-reply if the "contact" looks like an email
    const looksLikeEmail = typeof contact === "string" && contact.includes("@");
    if (looksLikeEmail && process.env.RESEND_API_KEY && FROM) {
      await resend.emails.send({
        from: FROM,
        to: [contact],
        subject: "We got your vision — Lusso",
        html: `
          <div>
            <p>Hi ${escapeHtml(name)},</p>
            <p>Thanks for sharing your preferences. Our team will reach out shortly to craft a brand mix that fits your vibe.</p>
            <p>Love, Lusso</p>
          </div>
        `,
      });
    }

    // 3) Append to Google Sheets
    if (
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    ) {
      const auth = new google.auth.JWT(
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        undefined,
        process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
        ["https://www.googleapis.com/auth/spreadsheets"]
      );
      const sheets = google.sheets({ version: "v4", auth });
      const row = [
        new Date().toISOString(),
        name,
        contact,
        city,
        kitchenVibe,
        finishes.join(" | "),
        wardrobe,
        shutters,
        partitions,
      ];
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: "Responses!A1",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [row] },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("start-vision error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
