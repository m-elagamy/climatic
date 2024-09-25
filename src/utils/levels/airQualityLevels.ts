const airQualityLevels = [
  {
    max: 12,
    description: "Air is clean. Great for outdoor activities.",
  },
  {
    max: 35.4,
    description: "Acceptable. Sensitive groups should limit outdoor time.",
  },
  {
    max: 55.4,
    description: "Unhealthy for sensitive groups. Stay indoors if needed.",
  },
  {
    max: 150.4,
    description: "Poor air quality. Avoid outdoor activities if possible.",
  },
  {
    max: 250.4,
    description: "Very unhealthy. Limit outdoor exposure.",
  },
  {
    max: Infinity,
    description: "Hazardous. Stay indoors and close windows.",
  },
];

export default airQualityLevels;
