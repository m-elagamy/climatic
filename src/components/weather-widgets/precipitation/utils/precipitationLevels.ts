const precipitationLevels = [
  {
    max: 0,
    level: "No Precipitation",
    description: "No rain or snow expected.",
    color: "rgb(40 197 247)",
  },
  {
    max: 2.5,
    level: "Light",
    description: "Light rain or drizzle, minimal inconvenience.",
    color: "#1e3a8a",
  },
  {
    max: 7.6,
    level: "Heavy",
    description: "Significant rain, wet conditions likely.",
    color: "#2563eb",
  },
  {
    max: 15.9,
    level: "Very Heavy",
    description: "Intense rain, possible flash flooding.",
    color: "#1d4ed8",
  },
  {
    max: 64.9,
    level: "Extreme",
    description: "Severe rain, flooding likely, take precautions.",
    color: "#1e40af",
  },
];

export default precipitationLevels;
