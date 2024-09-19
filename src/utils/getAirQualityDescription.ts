export default function getAirQualityDescription(airQualityIndex: number) {
  const pm25Thresholds = [
    {
      max: 12,
      description:
        "The air is fresh and clean today! Enjoy your outdoor activities.",
    },
    {
      max: 35.4,
      description:
        "Air quality is acceptable, but if you're sensitive to pollution, consider limiting prolonged outdoor exertion.",
    },
    {
      max: 55.4,
      description:
        "Air quality is a bit concerning for those with respiratory issues. It's best to stay indoors if you're sensitive.",
    },
    {
      max: 150.4,
      description:
        "Today's air quality is poor. Everyone, especially those with health conditions, should avoid outdoor activities.",
    },
    {
      max: 250.4,
      description:
        "Air quality is very unhealthy. Limit outdoor exposure as much as possible for your safety.",
    },
    {
      max: Infinity,
      description:
        "The air quality is extremely dangerous today. Stay indoors and keep your windows closed.",
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
