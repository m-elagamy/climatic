export function getHumidityDescriptionAndColor(humidity: number = 0) {
  const humidityCategories = [
    {
      max: 30,
      description: "The air is very dry. Use a humidifier if possible.",
      color: "rgba(255, 20, 147, 1)",
    },
    {
      max: 40,
      description: "The air is dry. Consider using a humidifier.",
      color: "rgb(255 124 72)",
    },
    {
      max: 50,
      description: "Humidity is at a comfortable level.",
      color: "rgba(50, 205, 50, 1)",
    },
    {
      max: 60,
      description: "It's slightly humid. No action needed.",
      color: "rgba(70, 130, 180, 1)",
    },
    {
      max: 70,
      description: "It's humid. Consider using a dehumidifier.",
      color: "rgba(0, 206, 209, 1)",
    },
    {
      max: 80,
      description: "It's very humid. Use a dehumidifier if possible.",
      color: "rgba(47, 79, 79, 1)",
    },
    {
      max: Infinity,
      description: "It's extremely humid. Stay in air-conditioned places.",
      color: "rgba(0, 139, 139, 1)",
    },
  ];

  const match = humidityCategories.find(({ max }) => humidity < max);

  return {
    description:
      match?.description ??
      "The humidity is very high, making the air feel heavy and uncomfortable.",
    color: match?.color,
  };
}
