const airQualityLevels = [
  { max: 12, description: "Good air quality." },
  { max: 35.4, description: "Acceptable for most." },
  { max: 55.4, description: "Sensitive groups should limit outdoor time." },
  { max: 150.4, description: "Poor air quality. Limit outdoor activity." },
  { max: 250.4, description: "Very unhealthy. Stay indoors." },
  { max: Infinity, description: "Hazardous. Avoid going outside." },
];

export default airQualityLevels;
