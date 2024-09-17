const getDayName = (date: Date) => {
  return date.toLocaleDateString("en-US", { weekday: "long" });
};

export default getDayName;
