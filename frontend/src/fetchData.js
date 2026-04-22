export default async function fetchData(city) {
  try {
    const response = await fetch(`http://localhost:3000/weather?city=${city}`, {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Response is not from range 2xx!");
    }
  } catch (err) {
    console.log(err);
  }
}
