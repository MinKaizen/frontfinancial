import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { hubspotUpsertContact } from "@/utils/hubspotUpsertContact";

const toAuMobileE164 = (input: string) => {
  const d = input.replace(/\D/g, "");
  if (d.startsWith("04") && d.length === 10) return `+61${d.slice(1)}`;
  if (d.startsWith("614") && d.length === 11) return `+${d}`;
  if (d.startsWith("61") && d.length === 11 && d[2] === "4") return `+${d}`;
  if (d.startsWith("4") && d.length === 9) return `+61${d}`;
  return `+${d}`;
};

const AU_MOBILE_E164 = /^\+614\d{8}$/;

const contactSchema = z.object({
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
  owns_property: z
    .enum(["true", "false"], "Please select whether you currently own a property."),
  email: z.string().trim().email("Valid email required"),
});

export async function POST(req: NextRequest) {
  try {
    const raw = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
      const { fieldErrors } = parsed.error.flatten();
      return NextResponse.json(
        { error: "validation_error", fieldErrors },
        { status: 400 }
      );
    }

    try {
      const contact = await hubspotUpsertContact(parsed.data);

      return NextResponse.json({ contact }, { status: 200 });
    } catch (e: any) {
      const message = e instanceof Error ? e.message : String(e);
      return NextResponse.json(
        { error: "hubspot_upsert_failed", message },
        { status: 502 }
      );
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "server_error", message }, { status: 500 });
  }
}
