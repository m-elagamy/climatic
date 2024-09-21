export default function getFeelsLikeDescription(feelsLikeTemp: number): string {
  const temperatureRanges = [
    { max: 0, message: "It's freezing! Bundle up to stay warm." },
    { max: 10, message: "It's quite chilly outside. Wear a jacket." },
    { max: 20, message: "The weather is cool and comfortable." },
    { max: 30, message: "It feels warm. Light clothing would be best." },
    { max: Infinity, message: "It's hot outside! Stay hydrated and cool." },
  ];

  const range = temperatureRanges.find(({ max }) => feelsLikeTemp <= max);

  return range?.message ?? "Feels like a perfect day.";
}
