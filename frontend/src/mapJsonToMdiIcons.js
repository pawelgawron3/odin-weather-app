function mapIconToMDI(icon, iconName) {
  switch (iconName) {
    case "clear-day":
      icon.style.color = "#facc15";
      return "mdi-weather-sunny";
    case "clear-night":
      icon.style.color = "#6366f1";
      return "mdi-weather-night";
    case "partly-cloudy-day":
      icon.style.color = "#fbbf24";
      return "mdi-weather-partly-cloudy";
    case "partly-cloudy-night":
      icon.style.color = "#818cf8";
      return "mdi-weather-night-partly-cloudy";
    case "cloudy":
      icon.style.color = "#9ca3af";
      return "mdi-weather-cloudy";
    case "rain":
      icon.style.color = "#3b82f6";
      return "mdi-weather-rainy";
    case "snow":
      icon.style.color = "#e0f7ff";
      return "mdi-weather-snowy";
    case "sleet":
      icon.style.color = "#60a5fa";
      return "mdi-weather-snowy-rainy";
    case "wind":
      icon.style.color = "#6b7280";
      return "mdi-weather-windy";
    case "fog":
      icon.style.color = "#94a3b8";
      return "mdi-weather-fog";
    case "hail":
      icon.style.color = "#0ea5e9";
      return "mdi-weather-hail";
    case "thunderstorm":
      icon.style.color = "#f87171";
      return "mdi-weather-lightning";
    default:
      icon.style.color = "#000";
      return "mdi-exclamation-thick";
  }
}

export { mapIconToMDI };
