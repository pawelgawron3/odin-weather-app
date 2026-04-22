import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.WEATHER_API_KEY;

app.use(cors());

// GET /weather?city=xxx
app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) return res.status(400).json({ error: "City is required!" });

  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current%2Cdays&key=${API_KEY}&contentType=json`,
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
