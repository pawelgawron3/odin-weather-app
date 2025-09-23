async function fetchData(city) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current%2Cdays&key=5XEGJQ5WGPPJ6RS5QPAYZEQM3&contentType=json`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      let json = await response.json();
      return json;
    } else {
      throw new Error("Response is not from range 2xx!");
    }
  } catch (err) {
    console.log(err);
  }
}

export { fetchData };

// Normally, API keys shouldn't be exposed in frontend code for security reasons,
// but this one is a public key for a free API service, so it's safe to include.
