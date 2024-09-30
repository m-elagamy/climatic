const getDayName = (
  data: string = "2000-01-27",
  weekdayFormat: "short" | "long" | "narrow" = "long",
) => {
  return new Date(data).toLocaleDateString("en-US", { weekday: weekdayFormat });
};

export default getDayName;
