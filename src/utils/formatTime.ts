export const formatTimeForTimezone = (timezone: string | undefined): string => {
  const now = new Date();
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: timezone,
  }).format(now);
};
