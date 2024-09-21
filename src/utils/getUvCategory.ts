const getUvCategory = (uv: number = 0) => {
  const categories = [
    {
      max: 2,
      level: "Low",
      color: "rgba(91, 168, 238, 1) ",
      description: "No protection needed.",
    },
    {
      max: 5,
      level: "Moderate",
      color: "rgba(126, 212, 87, 1) ",
      description: "Use sunscreen, hats, and sunglasses.",
    },
    {
      max: 7,
      level: "High",
      color: "rgba(248, 212, 73, 1) ",
      description: "Protection needed. Stay in shade during midday hours.",
    },
    {
      max: 10,
      level: "Very High",
      color: "rgba(235, 77, 96, 1)",
      description: "Extra protection needed. Avoid sun exposure.",
    },
    {
      max: Infinity,
      level: "Extreme",
      color: "rgba(178, 34, 34, 1)",
      description: "Avoid sun exposure. Seek shade.",
    },
  ];

  // Find the category based on the uv value
  const { level, color, description } = categories.find(
    (category) => uv <= category.max,
  ) || { level: "Unknown", color: "bg-gray-500" };

  return { level, color, description };
};

export default getUvCategory;
