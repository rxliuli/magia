export function randomArray(count: number): number[] {
  return Array(count)
    .fill(0)
    .map((_, i) => i + 1)
}
