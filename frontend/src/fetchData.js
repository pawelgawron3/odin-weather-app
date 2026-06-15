export default async function fetchData(city) {
  const API_URL = process.env.API_URL || `http://localhost:3000`;

  try {
    const response = await fetch(`${API_URL}/weather?city=${city}`, {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 429) {
      return { error: "rate_limit" };
    } else {
      return { error: "api" };
    }
  } catch (err) {
    return { error: "network" };
  }
}
