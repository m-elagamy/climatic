const temperatureLevels = [
  {
    max: -10,
    description:
      "It's dangerously cold. Stay indoors and bundle up if you must go out.",
    color: "rgba(0, 0, 139, 1)",
  },
  {
    max: 0,
    description:
      "Freezing temperatures. Wear heavy winter clothing for warmth.",
    color: "rgba(0, 191, 255, 1)",
  },
  {
    max: 5,
    description: "Very cold. A thick coat, scarf, and gloves are necessary.",
    color: "rgba(70, 130, 180, 1)",
  },
  {
    max: 10,
    description: "Chilly. Wear a warm jacket and layers to stay comfortable.",
    color: "rgba(65, 105, 225, 1)",
  },
  {
    max: 15,
    description: "Cool weather. A light jacket or sweater is recommended.",
    color: "rgba(100, 149, 237, 1)",
  },
  {
    max: 20,
    description: "Mild temperatures. Light clothing is generally comfortable.",
    color: "rgba(34, 139, 34, 1)",
  },
  {
    max: 22,
    description:
      "Comfortably warm. Light clothing like short sleeves is ideal.",
    color: "rgba(154, 205, 50, 1)",
  },
  {
    max: 25,
    description: "Warm weather. Light, breathable clothing is recommended.",
    color: "rgba(255, 215, 0, 1)",
  },
  {
    max: 30,
    description: "Quite warm. Drink plenty of water and wear light clothing.",
    color: "rgba(255, 165, 0, 1)",
  },
  {
    max: 35,
    description: "Hot. Stay cool and hydrated throughout the day.",
    color: "rgba(255, 69, 0, 1)",
  },
  {
    max: 40,
    description:
      "Very hot. Limit outdoor activities and drink plenty of fluids.",
    color: "rgba(255, 0, 0, 1)",
  },
  {
    max: 45,
    description:
      "Extremely hot. Avoid prolonged outdoor exposure and stay cool.",
    color: "rgba(178, 34, 34, 1)",
  },
  {
    max: Infinity,
    description: "Dangerously hot. Stay indoors and avoid outdoor activities.",
    color: "rgba(139, 0, 0, 1)",
  },
];

export default temperatureLevels;
