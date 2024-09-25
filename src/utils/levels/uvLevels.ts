const uvLevels = [
  {
    max: 2,
    level: "Low",
    color: "rgba(135, 206, 250, 1)",
    description: "No protection needed.",
  },
  {
    max: 5,
    level: "Moderate",
    color: "rgb(110 177 4)",
    description: "Use sunscreen and sunglasses.",
  },
  {
    max: 7,
    level: "High",
    color: "rgba(255, 165, 0, 1)",
    description: "Wear SPF 30+ sunscreen and protective clothing.",
  },
  {
    max: 10,
    level: "Very High",
    color: "rgba(255, 69, 0, 1)",
    description: "Use SPF 50+ and avoid midday sun.",
  },
  {
    max: Infinity,
    level: "Extreme",
    color: "rgba(178, 34, 34, 1)",
    description: "Avoid sun exposure.",
  },
];

export default uvLevels;
