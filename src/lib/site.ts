export function getSiteUrl() {
  const rawSiteUrl =
    process.env.SITE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!rawSiteUrl) {
    return "http://localhost:3000";
  }

  if (
    rawSiteUrl.startsWith("http://") ||
    rawSiteUrl.startsWith("https://")
  ) {
    return rawSiteUrl;
  }

  return `https://${rawSiteUrl}`;
}
