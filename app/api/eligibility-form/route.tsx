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

export const contactSchema = z.object({
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
  owns_property_string: z
    .enum(["true", "false"], "Please select whether you currently own a property."),
  email: z.email("Valid email required").trim(),
  contact_source: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const raw = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    const fields = raw.fields ?? {}
    const meta = raw.meta ?? {}
    const parsed = contactSchema.safeParse(fields);

    if (!parsed.success) {
      const { fieldErrors } = parsed.error.flatten();
      return NextResponse.json(
        { error: "validation_error", fieldErrors },
        { status: 400 }
      );
    }

    try {
      const formId = process.env.HUBSPOT_ELIGIBILITY_FORM_GUID ?? ''
      let data

      if (meta) {
        data = await hubspotSubmitForm(formId, parsed.data, meta);
      } else {
        data = await hubspotSubmitForm(formId, parsed.data);
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
