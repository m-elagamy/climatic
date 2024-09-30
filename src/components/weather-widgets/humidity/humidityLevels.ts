const humidityLevels = [
  {
    max: 30,
    description: "Dry air. Consider using a humidifier to maintain comfort.",
    color: "#B8860B",
  },
  {
    max: 40,
    description:
      "Slightly dry. Sensitive individuals may benefit from a humidifier.",
    color: "#D2691E",
  },
  {
    max: 50,
    description: "Comfortable humidity for most people.",
    color: "#32CD32",
  },
  {
    max: 60,
    description:
      "Moderately humid. Generally comfortable, though some may feel slight humidity.",
    color: "#4682B4",
  },
  {
    max: 70,
    description:
      "Humid. Consider using a dehumidifier if it feels uncomfortable.",
    color: "#1E90FF",
  },
  {
    max: 80,
    description: "Very humid. A dehumidifier may help maintain indoor comfort.",
    color: "#00BFFF",
  },
  {
    max: Infinity,
    description:
      "Extremely humid. Staying indoors and keeping cool is advisable.",
    color: "#1E3A8A",
  },
];

export default humidityLevels;
