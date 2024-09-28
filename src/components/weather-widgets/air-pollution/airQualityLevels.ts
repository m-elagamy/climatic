const airQualityLevels = [
  {
    max: 12,
    level: "Good",
    description: "Good air quality.",
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
    level: "Unhealthy for sensitive groups",
    description: "Sensitive groups should limit outdoor time.",
    color: "#f97316",
  },
  {
    max: 150.4,
    level: "Unhealthy",
    description: "Poor air quality. Limit outdoor activity.",
    color: "#ef4444",
  },
  {
    max: 250.4,
    level: "Very unhealthy",
    description: "Very unhealthy. Stay indoors.",
    color: "#a855f7",
  },
  {
    max: Infinity,
    level: "Hazardous",
    description: "Hazardous. Avoid going outside.",
    color: "#9333ea",
  },
];

export default airQualityLevels;
