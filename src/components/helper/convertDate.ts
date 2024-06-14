export function convertDate(date: string | undefined) {
  if (date) {
    return new Date(Date.parse(date)).toLocaleDateString();
  }
  return date;
}
