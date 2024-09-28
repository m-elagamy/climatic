const airQualityLevels = [
  {
    max: 12,
    level: "Good",
    description: "Air quality is good.",
    color: "#22c55e",
  },
  {
    max: 35.4,
    level: "Moderate",
    description: "Acceptable for most.",
    color: "#eab308",
  },
  {
    max: 55.4,
    level: "Sensitive",
    description: "Limit outdoor time.",
    color: "#f97316",
  },
  {
    max: 150.4,
    level: "Unhealthy",
    description: "Limit outdoor activity.",
    color: "#ef4444",
  },
  {
    max: 250.4,
    level: "Very Unhealthy",
    description: "Stay indoors.",
    color: "#a855f7",
  },
  {
    max: Infinity,
    level: "Hazardous",
    description: "Avoid going outside.",
    color: "#9333ea",
  },
];

export default airQualityLevels;
