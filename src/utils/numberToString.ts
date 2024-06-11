export function numberToString(value: string) {
  if (value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return "";
}
