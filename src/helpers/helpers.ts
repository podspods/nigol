export function uniqueId(): string {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).slice(2, 9);
  return dateString + randomness;
}
