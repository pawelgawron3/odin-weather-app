export default async function fetchData(city) {
  try {
    const response = await fetch(
      `https://weather-app-api-8xh1.onrender.com/weather?city=${city}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return { error: "api" };
    }
  } catch (err) {
    return { error: "network" };
  }
}
