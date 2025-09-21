import { Client } from "@hubspot/api-client";
import { SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/contacts";
import { hubspotFindContactByEmail, HubSpotContact as SearchHubSpotContact } from "./hubspotFindContactByEmail";

export type UpsertContactInput = {
  email: string;
  firstname?: string;
  lastname?: string;
  owns_property_string?: "true" | "false";
  phone?: string;
  contact_source?: string;
};

type UpsertedHubSpotContact = SearchHubSpotContact & {
  properties: SearchHubSpotContact["properties"] & { phone?: string };
};

const mapSimpleToContact = (o: SimplePublicObject): UpsertedHubSpotContact => ({
  id: o.id,
  properties: {
    email: o.properties?.email ?? "",
    firstname: o.properties?.firstname ?? "",
    hs_object_id: o.properties?.hs_object_id ?? o.id,
    lastname: o.properties?.lastname ?? "",
    owns_property_string: o.properties?.owns_property_string === "true" ? "true" : "false",
    contact_source: o.properties?.contact_source ?? "",
    ...(o.properties?.phone ? { phone: o.properties.phone } : {}),
  },
});

export async function hubspotUpsertContact(input: UpsertContactInput): Promise<UpsertedHubSpotContact> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) throw new Error("HUBSPOT_ACCESS_TOKEN is not set");
  if (!input?.email || !input.email.includes("@")) throw new Error("A valid email is required");

  const hubspotClient = new Client({ accessToken: token });

  const existing = await hubspotFindContactByEmail(input.email);

  const properties: Record<string, string> = {};
  if (typeof input.firstname !== "undefined") properties.firstname = input.firstname;
  if (typeof input.lastname !== "undefined") properties.lastname = input.lastname;
  if (typeof input.phone !== "undefined") properties.phone = input.phone;
  if (typeof input.owns_property_string !== "undefined") {
    properties.owns_property_string = typeof input.owns_property_string === "boolean" ? (input.owns_property_string ? "true" : "false") : input.owns_property_string;
  }
  if (typeof input.contact_source !== "undefined") properties.contact_source = input.contact_source;

  try {
    if (existing) {
      if (Object.keys(properties).length === 0) {
        const result = await hubspotClient.crm.contacts.basicApi.getById(existing.id, [
          "email",
          "firstname",
          "lastname",
          "hs_object_id",
          "owns_property_string",
          "phone",
          "contact_source",
        ]);
        return mapSimpleToContact(result);
      }
      const updated = await hubspotClient.crm.contacts.basicApi.update(existing.id, { properties });
      return mapSimpleToContact(updated);
    } else {
      const created = await hubspotClient.crm.contacts.basicApi.create({ properties: { email: input.email, ...properties } });
      return mapSimpleToContact(created);
    }
  } catch (e: any) {
    const details = e?.response?.body ? (typeof e.response.body === "string" ? e.response.body : e.response.body?.message || JSON.stringify(e.response.body)) : undefined;
    const message = e instanceof Error ? e.message : String(e);
    throw new Error(`HubSpot contact upsert failed: ${details || message}`);
  }
}
