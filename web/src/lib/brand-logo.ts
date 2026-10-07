import { parseColor } from "@hermes/shared";

/**
 * SEO Smooth wordmark for the active theme's canvas: dark lettering on light
 * canvases (e.g. Oceans), light lettering on dark ones. Both files live in
 * `web/public/` so the dashboard never depends on an external host.
 */
export function brandLogoFor(backgroundHex: string): string {
  const [r, g, b] = parseColor(backgroundHex) ?? [0, 0, 0];
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.6 ? "/seosmooth-logo-dark-text.png" : "/seosmooth-logo-light-text.png";
}