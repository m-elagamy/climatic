const humidityLevels = [
  {
    max: 30,
    description: "Very dry. Consider using a humidifier.",
    color: "rgba(210, 180, 140, 1)",
  },
  {
    max: 40,
    description: "Slightly dry. A humidifier may help.",
    color: "rgba(244, 164, 96, 1)",
  },
  {
    max: 50,
    description: "Comfortable humidity.",
    color: "rgba(50, 205, 50, 1)",
  },
  {
    max: 60,
    description: "Slightly humid but comfortable.",
    color: "rgba(70, 130, 180, 1)",
  },
  {
    max: 70,
    description: "Humid. Consider a dehumidifier.",
    color: "rgba(30, 144, 255, 1)",
  },
  {
    max: 80,
    description: "Very humid. A dehumidifier is recommended.",
    color: "rgba(0, 191, 255, 1)",
  },
  {
    max: Infinity,
    description: "Extremely humid. Stay cool indoors.",
    color: "rgb(26 26 250)",
  },
];

export default humidityLevels;
