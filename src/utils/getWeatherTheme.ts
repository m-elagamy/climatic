// const getWeatherTheme = (
//   condition: string | undefined,
//   isDay: boolean | undefined,
// ) => {
//   switch (condition?.toLowerCase()) {
//     case "clear":
//     case "sunny":
//       return isDay ? clearDayImage.src : clearNightImage.src;

//     case "partly cloudy":
//     case "cloudy":
//     case "overcast":
//       return isDay ? overcastImage.src : overcastNightImage.src;

//     case "mist":
//     case "fog":
//     case "haze":
//     case "smoke":
//     case "sand":
//     case "dust":
//     case "ash":
//       return isDay ? foggyDayImage.src : foggyNightImage.src;

//     case "patchy light drizzle":
//     case "light drizzle":
//     case "patchy rain nearby":
//     case "light rain shower":
//       return lightRainImage.src;

//     case "patchy light rain":
//     case "light rain":
//     case "moderate rain":
//     case "heavy rain":
//     case "patchy rain possible":
//     case "moderate or heavy rain shower":
//     case "shower in vicinity":
//       return rainyImage.src;

//     case "sleet":
//     case "moderate or heavy sleet":
//     case "light sleet showers":
//     case "patchy sleet":
//     case "light freezing rain":
//     case "patchy freezing drizzle possible":
//     case "light freezing drizzle":
//       return sleetImage.src;

//     case "thundery outbreaks possible":
//     case "thunderstorm":
//     case "moderate or heavy rain with thunder":
//     case "tornado":
//     case "hurricane":
//     case "patchy light rain with thunder":
//       return thunderImage.src;

//     case "snow":
//     case "patchy snow possible":
//     case "patchy light snow":
//     case "light snow":
//     case "moderate snow":
//     case "heavy snow":
//     case "blowing snow":
//     case "blizzard":
//     case "freezing fog":
//     case "icy":
//     case "patchy light snow with thunder":
//     case "moderate or heavy snow with thunder":
//     case "freezing drizzle":
//       return isDay ? snowDayImage.src : snowNightImage.src;

//     case "rain and snow":
//     case "light rain and snow":
//     case "moderate rain and snow":
//     case "heavy rain and snow":
//     case "ice pellets":
//     case "sleet and snow":
//     case "light sleet and snow":
//       return rainSnowImage.src;

//     default:
//       return overcastImage.src;
//   }
// };

// export default getWeatherTheme;
