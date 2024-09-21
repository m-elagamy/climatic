export default function getFeelsLikeDescriptionAndColor(feelsLikeTemp: number) {
  const temperatureCategories = [
    {
      max: -10,
      message: "It's extremely cold. Stay indoors if possible.",
      color: "rgba(0, 0, 205, 1)",
    },
    {
      max: 0,
      message: "It's freezing. Dress warmly.",
      color: "rgba(0, 191, 255, 1)",
    },
    {
      max: 5,
      message: "It's very chilly. Wear a thick jacket.",
      color: "rgba(30, 144, 255, 1)",
    },
    {
      max: 10,
      message: "It's cool. A warm jacket is needed.",
      color: "rgba(65, 105, 225, 1)",
    },
    {
      max: 15,
      message: "It's mild. A light jacket is advisable.",
      color: "rgba(100, 149, 237, 1)",
    },
    {
      max: 20,
      message: "The weather is comfortable.",
      color: "rgba(50, 205, 50, 1)",
    },
    {
      max: 22,
      message: "It's pleasantly warm. Light clothing recommended.",
      color: "rgba(173, 255, 47, 1)",
    },
    {
      max: 25,
      message: "It feels warm. Light clothing would be best.",
      color: "rgba(255, 223, 0, 1)",
    },
    {
      max: 30,
      message: "It's warm. If you're outside, stay hydrated.",
      color: "rgba(255, 140, 0, 1)",
    },
    {
      max: 35,
      message: "It's hot. Limit outdoor activities.",
      color: "rgba(255, 69, 0, 1)",
    },
    {
      max: 40,
      message: "It's extremely hot. Take precautions if you're outside.",
      color: "rgba(255, 0, 0, 1)",
    },
    {
      max: 45,
      message: "It's scorching hot. Stay cool and hydrated.",
      color: "rgba(220, 20, 60, 1)",
    },
    {
      max: Infinity,
      message: "It's dangerously hot. Avoid outdoor activities if possible.",
      color: "rgba(178, 34, 34, 1)",
    },
  ];

  const range = temperatureCategories.find(({ max }) => feelsLikeTemp <= max);

  return {
    message: range?.message ?? "Feels like a perfect day.",
    color: range?.color ?? "rgba(144, 238, 144, 1)",
  };
}
