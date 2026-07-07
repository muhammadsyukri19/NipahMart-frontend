/**
 * Obfuscates latitude and longitude coordinates for farmer privacy
 * Example: "5.4521° N, 95.2443° E" -> "5.45xx° N, 95.24xx° E"
 * Example: "5.5483, 95.3238" -> "5.54xx, 95.32xx"
 */
export function maskCoordinates(coords: string | undefined | null): string {
  if (!coords) return '-';
  
  // Regular expression to find decimal patterns (like 5.4521 or 95.2443)
  // We want to keep the first two decimal places and mask the rest with 'xx'
  return coords.replace(/(\d+)\.(\d{2})\d*/g, '$1.$2xx');
}
