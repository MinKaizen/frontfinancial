import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json().catch(() => ({} as any));

    if (!email) {
      return NextResponse.json({ error: "email required" }, { status: 400 });
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID!;
    const formGuid = process.env.HUBSPOT_EMAIL_FORM_GUID!;
    const hutk = req.cookies.get("hubspotutk")?.value;
    const pageUri = req.headers.get("referer") ?? "";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const payload = {
      fields: [{ name: "email", value: email }],
      context: {
        hutk,
        pageUri,
        pageName: "Custom React Form",
      },
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Note: this endpoint supports CORS, but proxying via your server keeps IDs hidden
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.ok ? 200 : 400 });
  } catch (err) {
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
