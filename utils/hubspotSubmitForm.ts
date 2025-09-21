/**
 * Submit arbitrary fields to a HubSpot Marketing Form (v3 Submissions API).
 *
 * ❗ Must run on the server (do not expose your HubSpot token to the client).
 *    Set HUBSPOT_PRIVATE_APP_TOKEN in your environment.
 *
 * @param formId HubSpot Form ID / GUID
 * @param fields Object of { [fieldName]: any } — values will be stringified if not strings
 * @param meta   Optional context for attribution & compliance
 * @returns      The HubSpot JSON response
 *
 * Throws Error with detailed info if HubSpot returns a non-2xx status.
 */
export async function hubspotSubmitForm(
  formId: string,
  fields: Record<string, unknown>,
  meta?: {
    /** HubSpot user token from cookies (if you have it). Name is usually 'hubspotutk'. */
    hutk?: string;
    /** The page URL where the submission happened. */
    pageUrl?: string;
    /** The page title/name where the submission happened. */
    pageName?: string;
    /** Submission timestamp (ms since epoch). Defaults to Date.now(). */
    submittedAt?: number;
    /** Include GDPR consent block if your portal requires it. */
    legalConsentOptions?: {
      consent: {
        consentToProcess: boolean;
        text: string;
        communications: Array<{
          value: boolean;
          subscriptionTypeId: number;
          text: string;
        }>;
      };
    };
  }
) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!token) {
    throw new Error(
      "Missing HUBSPOT_ACCESS_TOKEN env var. Add your HubSpot Private App token to the server environment."
    );
  }

  if (!formId || typeof formId !== "string") {
    throw new Error("`formId` must be a non-empty string.");
  }

  // HubSpot expects [{ name, value }, ...]
  const normalizedFields = Object.entries(fields).map(([name, value]) => ({
    name,
    value:
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
        ? String(value)
        : JSON.stringify(value),
  }));

  const body: any = {
    submittedAt: meta?.submittedAt ?? Date.now(),
    fields: normalizedFields,
  };

  // Optional context
  if (meta?.hutk || meta?.pageUrl || meta?.pageName) {
    body.context = {
      ...(meta?.hutk ? { hutk: meta.hutk } : {}),
      ...(meta?.pageUrl ? { pageUri: meta.pageUrl } : {}),
      ...(meta?.pageName ? { pageName: meta.pageName } : {}),
    };
  }

  // Optional GDPR consent
  if (meta?.legalConsentOptions) {
    body.legalConsentOptions = meta.legalConsentOptions;
  }

  const portalIdEncoded = encodeURIComponent(process.env.HUBSPOT_PORTAL_ID ?? '')
  const formIdEncoded = encodeURIComponent(formId)
  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalIdEncoded}/${formIdEncoded}`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  // Try to parse JSON either way (success or error)
  let resText: string | undefined;
  let resJson: unknown;
  try {
    resText = await res.text();
    resJson = resText ? JSON.parse(resText) : undefined;
  } catch {
    // Non-JSON response
  }

  if (!res.ok) {
    // Extract as much detail as possible (status, statusText, correlationId, errors)
    const statusInfo = `${res.status} ${res.statusText}`;
    const correlationId =
      (resJson as any)?.correlationId || (resJson as any)?.context?.correlationId;
    const errors = (resJson as any)?.errors || (resJson as any)?.message;

    const detail = [
      `HubSpot submission failed (${statusInfo}).`,
      correlationId ? `correlationId=${correlationId}` : "",
      errors ? `errors=${JSON.stringify(errors)}` : "",
      resText ? `raw=${truncate(resText, 2000)}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const err = new Error(detail);
    // Attach raw response for advanced callers if needed
    (err as any).status = res.status;
    (err as any).statusText = res.statusText;
    (err as any).response = resJson ?? resText;
    throw err;
  }

  return resJson;
}

/** Small helper to avoid throwing massive error strings */
function truncate(s: string, max = 2000) {
  return s.length <= max ? s : `${s.slice(0, max)}… (${s.length - max} more chars)`;
}
