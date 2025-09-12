export function metaPixel(event: string, action: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq(event, action, params)
  } else {
    console.warn(`No Meta Pixel found - [${event}][${action}] was not sent`)
  }
}
