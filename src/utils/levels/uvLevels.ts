const uvLevels = [
  {
    max: 2,
    level: "Low",
    description: "No protection needed.",
    color: "rgba(135, 206, 250, 1)",
  },
  {
    max: 5,
    level: "Moderate",
    description: "Consider sunscreen.",
    color: "rgb(110 177 4)",
  },
  {
    max: 7,
    level: "High",
    description: "Use sunscreen and cover up.",
    color: "rgba(255, 165, 0, 1)",
  },
  {
    max: 10,
    level: "Very High",
    description: "Avoid midday sun.",
    color: "rgba(255, 69, 0, 1)",
  },
  {
    max: Infinity,
    level: "Extreme",
    description: "Minimize sun exposure.",
    color: "rgba(178, 34, 34, 1)",
  },
];

export default uvLevels;
