export function round(value: number, decimals?: number): number {
  return Math.round(value * 1e2) / 1e2;
}
