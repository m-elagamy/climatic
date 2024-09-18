const getDayName = () => {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
};

export default getDayName;
