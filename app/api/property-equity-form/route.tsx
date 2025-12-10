import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { hubspotSubmitForm } from "@/utils/hubspotSubmitForm";

const toAuMobileE164 = (input: string) => {
  const d = input.replace(/\D/g, "");
  if (d.startsWith("04") && d.length === 10) return `+61${d.slice(1)}`;
  if (d.startsWith("614") && d.length === 11) return `+${d}`;
  if (d.startsWith("61") && d.length === 11 && d[2] === "4") return `+${d}`;
  if (d.startsWith("4") && d.length === 9) return `+61${d}`;
  return `+${d}`;
};

const AU_MOBILE_E164 = /^\+614\d{8}$/;

export const propertyEquitySchema = z.object({
  firstname: z.string().trim().min(1, "First name is required"),
  lastname: z.string().trim().min(1, "Last name is required"),
  phone: z
    .string()
    .trim()
    .transform(toAuMobileE164)
    .refine((v) => AU_MOBILE_E164.test(v), {
      message:
        "Phone must be an Australian mobile (e.g. 04xx xxx xxx or +61 4xx xxx xxx).",
    }),
  ownsProperty: z.string().min(1, "Please indicate wether you own property"),
  email: z.string().trim().email("Valid email required"),
  contact_source: z.string().optional(),
  businessStructure: z.string().min(1, "Please select your business structure"),
  debtLevel: z.string().min(1, "Please select your debt level"),
  urgency: z.string().min(1, "Please select urgency level"),
  companyName: z.string().trim().min(1, "Company name is required"),
});

export async function POST(req: NextRequest) {
  try {
    const raw = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    const fields = raw.fields ?? {}
    const meta = raw.meta ?? {}
    const parsed = propertyEquitySchema.safeParse(fields);

    if (!parsed.success) {
      const errors = parsed.error.format();
      return NextResponse.json(
        { error: "validation_error", errors },
        { status: 400 }
      );
    }

    try {
      const formId = process.env.HUBSPOT_PROPERTY_EQUITY_FORM_GUID ?? ''

      const formData = {
        firstname: parsed.data.firstname,
        lastname: parsed.data.lastname,
        phone: parsed.data.phone,
        owns_property_string: parsed.data.ownsProperty,
        email: parsed.data.email,
        contact_source: parsed.data.contact_source,
        how_is_your_business_currently_structured_in_australia: parsed.data.businessStructure,
        whats_your_current_level_of_business_debt__: parsed.data.debtLevel,
        how_urgent_is_your_inquiry: parsed.data.urgency,
        company: parsed.data.companyName,
      }

      let data

      if (meta) {
        data = await hubspotSubmitForm(formId, formData, meta);
      } else {
        data = await hubspotSubmitForm(formId, formData);
      }

      return NextResponse.json(data, { status: 200 });
    } catch (e: any) {
      const message = e instanceof Error ? e.message : String(e);
      return NextResponse.json(
        { error: "hubspot_form_submit_failed", message },
        { status: 502 }
      );
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "server_error", message }, { status: 500 });
  }
}
