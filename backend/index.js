import express from "express";

const app = express();
const PORT = 3000;

// GET /weather?city=xxx
app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) return res.status(400).json({ error: "City is required!" });

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current%2Cdays&key=5XEGJQ5WGPPJ6RS5QPAYZEQM3&contentType=json`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      const data = await response.json();
      return res.json(data);
    } else {
      return res.status(response.status).json({
        error: "Failed to fetch weather data",
      });
    }
  } catch (err) {
    return res.status(500).json({ error: "Server error!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
