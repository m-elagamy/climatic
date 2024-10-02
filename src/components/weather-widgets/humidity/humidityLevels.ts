const humidityLevels = [
  {
    max: 30,
    level: "Very Low",
    description: "Dry air. Use a humidifier.",
    color: "#B8860B",
  },
  {
    max: 40,
    level: "Low",
    description: "Slightly dry. A humidifier is recommended.",
    color: "#D2691E",
  },
  {
    max: 50,
    level: "Comfortable",
    description: "Ideal for most people.",
    color: "#32CD32",
  },
  {
    max: 60,
    level: "Mildly Humid",
    description: "Slightly humid but manageable.",
    color: "#4682B4",
  },
  {
    max: 70,
    level: "Humid",
    description: "Feels humid. Consider a dehumidifier.",
    color: "#1E90FF",
  },
  {
    max: 80,
    level: "Very Humid",
    description: "High humidity. A dehumidifier is advised.",
    color: "#00BFFF",
  },
  {
    max: Infinity,
    level: "Severely Humid",
    description: "Uncomfortable. Stay cool indoors.",
    color: "rgb(40 92 243)",
  },
];

export default humidityLevels;
