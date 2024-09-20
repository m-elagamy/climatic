const getUvCategory = (uv: number = 0) => {
  const categories = [
    {
      max: 2,
      level: "Low",
      color: "text-green-500",
      description: "No protection needed.",
    },
    {
      max: 5,
      level: "Moderate",
      color: "text-yellow-500",
      description: "Use sunscreen, hats, and sunglasses.",
    },
    {
      max: 7,
      level: "High",
      color: "text-orange-500",
      description: "Protection needed. Stay in shade during midday hours.",
    },
    {
      max: 10,
      level: "Very High",
      color: "text-red-500",
      description: "Extra protection needed. Avoid sun exposure.",
    },
    {
      max: Infinity,
      level: "Extreme",
      color: "text-purple-600",
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
