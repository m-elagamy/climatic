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
      "It's freezing. Wear heavy winter clothing, including a coat, hat, gloves, and scarf.",
    color: "rgba(0, 191, 255, 1)",
  },
  {
    max: 5,
    description: "Very cold. A thick coat, scarf, and gloves are necessary.",
    color: "rgba(70, 130, 180, 1)",
  },
  {
    max: 10,
    description: "Chilly. A warm jacket and layers will keep you comfortable.",
    color: "rgba(65, 105, 225, 1)",
  },
  {
    max: 15,
    description:
      "Cool. A light jacket or sweater is advisable, especially in the shade.",
    color: "rgba(100, 149, 237, 1)",
  },
  {
    max: 20,
    description:
      "Mild and pleasant. You might need a light sweater but generally comfortable.",
    color: "rgba(34, 139, 34, 1)",
  },
  {
    max: 22,
    description:
      "Comfortably warm. Light clothing like short sleeves or a light shirt is ideal.",
    color: "rgba(154, 205, 50, 1)",
  },
  {
    max: 25,
    description: "Warm. Light, breathable clothing is recommended.",
    color: "rgba(255, 215, 0, 1)",
  },
  {
    max: 30,
    description:
      "It's quite warm. Stay cool with light clothing and drink plenty of water.",
    color: "rgba(255, 165, 0, 1)",
  },
  {
    max: 35,
    description: "It's hot. Avoid strenuous activities, and stay hydrated.",
    color: "rgba(255, 69, 0, 1)",
  },
  {
    max: 40,
    description:
      "Very hot. Stay indoors if possible and avoid prolonged exposure to the sun.",
    color: "rgba(255, 0, 0, 1)",
  },
  {
    max: 45,
    description:
      "Extremely hot. Heat exhaustion is possible; take precautions and stay cool.",
    color: "rgba(178, 34, 34, 1)",
  },
  {
    max: Infinity,
    description:
      "It's dangerously hot. Avoid outdoor activities and seek air-conditioned spaces.",
    color: "rgba(139, 0, 0, 1)",
  },
];

export default temperatureLevels;
