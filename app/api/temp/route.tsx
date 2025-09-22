import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const portalId = process.env.HUBSPOT_PORTAL_ID!;
  const formGuid = process.env.HUBSPOT_ELIGIBILITY_FORM_GUID!;
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  const hasHsToken = Boolean(token)

  const data = {
    portalId,
    formGuid,
    hasHsToken,
  }

  return NextResponse.json(data, { status: 200 });
}
