export default function getAirQualityDescription(airQualityIndex: number = 0) {
  const pm25Thresholds = [
    {
      max: 12,
      description: "Air is fresh and clean. Enjoy outdoor activities.",
    },
    {
      max: 35.4,
      description:
        "Air quality is acceptable. Sensitive individuals should limit prolonged exertion.",
    },
    {
      max: 55.4,
      description:
        "Air quality is concerning for those with respiratory issues. Stay indoors if sensitive.",
    },
    {
      max: 150.4,
      description:
        "Air quality is poor. Avoid outdoor activities, especially if you have health conditions.",
    },
    {
      max: 250.4,
      description: "Air quality is very unhealthy. Limit outdoor exposure.",
    },
    {
      max: Infinity,
      description:
        "Air quality is extremely dangerous. Stay indoors and keep windows closed.",
    },
  ];

  const threshold = pm25Thresholds.find(
    (threshold) => airQualityIndex <= threshold.max,
  );

  return (
    threshold?.description ??
    "Air quality data is not available at the moment. Stay safe and check again later."
  );
}
