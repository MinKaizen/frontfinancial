import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    // const portalId = process.env.HUBSPOT_PORTAL_ID!;
    // const formGuid = process.env.HUBSPOT_FORM_GUID!;
    // const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
    //
    // const payload = {
    //   fields: [{ name: 'email', value: email }],
    //   context: {
    //     pageUri: process.env.SITE_URL || '',
    //     pageName: 'Inline lead form',
    //   },
    // };
    //
    // const hs = await fetch(url, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });
    //
    // if (!hs.ok) {
    //   const detail = await hs.text();
    //   return NextResponse.json({ error: 'hubspot_error', detail }, { status: 502 });
    // }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
