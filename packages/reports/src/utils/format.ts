export function formatFullDate() {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const day = today.getDate();
  const year = today.getFullYear();

  return `${month} ${day}, ${year}`;
}
