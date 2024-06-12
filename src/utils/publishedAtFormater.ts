export function publishedAtFormater(
  publishedAtDate: Date,
  currentDate: Date
): string {
  const diffTime = currentDate.getTime() - publishedAtDate.getTime();
  const diffMinutes = Math.floor(diffTime / 60000);
  const diffHours = Math.floor(diffTime / 3600000);

  if (diffTime < 3.6e6) {
    return "há 1 minuto";
  } else if (diffTime < 36e5) {
    return `há ${diffMinutes} minutos`;
  } else if (diffTime < 864e5) {
    if (diffHours === 1) {
      return `há ${diffHours} hora`;
    } else {
      return `há ${diffHours} horas`;
    }
  } else {
    return publishedAtDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
}
