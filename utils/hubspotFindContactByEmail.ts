import { Client } from "@hubspot/api-client";
import { FilterOperatorEnum } from "@hubspot/api-client/lib/codegen/crm/contacts/models/Filter";
import { SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/contacts";

export type HubSpotContact = {
  id: string;
  properties: {
    email: string;
    firstname: string;
    hs_object_id: string;
    lastname: string;
    owns_property: "true" | "false";
  };
}

const mapSimpleToContact = (o: SimplePublicObject): HubSpotContact => ({
  id: o.id,
  properties: {
    email: o.properties?.email ?? '',
    firstname: o.properties?.firstname ?? '',
    hs_object_id: o.properties?.hs_object_id ?? o.id,
    lastname: o.properties?.lastname ?? '',
    // normalize to the literal union
    owns_property: (o.properties?.owns_property === 'true' ? 'true' : 'false'),
  },
});;

export async function hubspotFindContactByEmail(email: string): Promise<HubSpotContact | null> {
  const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

  const data = await hubspotClient.crm.contacts.searchApi.doSearch({
    filterGroups: [{
      filters: [{
        propertyName: "email",
        operator: FilterOperatorEnum.Eq,
        value: email,
      }],
    }],
    properties: [
      "email",
      "firstname",
      "lastname",
      "hs_object_id",
      "owns_property",
    ],
    limit: 1,
  })

  if (data.total == 0 || data.results.length == 0) {
    return null
  }

  const contact = mapSimpleToContact(data.results[0])

  return contact as HubSpotContact;
};

