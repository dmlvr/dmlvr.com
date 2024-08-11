export function formatDateString(dateString: string): string | null {
  if (!dateString || typeof dateString !== "string") {
    return null;
  }

  const date = new Date(dateString);

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return null;
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Месяцы начинаются с 0
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
}
