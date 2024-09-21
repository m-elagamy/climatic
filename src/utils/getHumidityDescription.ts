export function getHumidityDescription(humidity: number = 0): string {
  const thresholds = [
    {
      limit: 30,
      description: "The air feels dry, which may cause discomfort or dryness.",
    },
    {
      limit: 60,
      description: "The humidity is comfortable, ideal for most people.",
    },
    {
      limit: 80,
      description: "The air feels humid and might start to feel sticky.",
    },
  ];

  const match = thresholds.find(({ limit }) => humidity < limit);

  return match
    ? match.description
    : "The humidity is very high, making the air feel heavy and uncomfortable.";
}
