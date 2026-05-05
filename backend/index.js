import express from "express";
import cors from "cors";
import { createClient } from 'redis'

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.WEATHER_API_KEY;
const MAX_CONNECTIONS = 10
app.use(cors());

const client = createClient({
  url: "redis://redis:6379"
});

client.on('error', err => console.log('Redis Client Error', err));
client.on("connect", () => console.log("🟢 Redis CONNECTED"));
await client.connect();

// GET /weather?city=xxx
app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) return res.status(400).json({ error: "City is required!" });

  const cacheKey = `weather:${city.toLowerCase().trim()}`;
  const ip = req.ip;
  const rateKey = `rate:${ip}`;
  const count = await client.incr(rateKey);
  if (count == 1) await client.expire(rateKey, 60);
  if (count > MAX_CONNECTIONS) return res.status(429).send("Too many requests");

  try {
    {
      const cachedWeather = await client.get(cacheKey)
      if (cachedWeather) {
        return res.json(JSON.parse(cachedWeather))
      }
    }
    const response = await fetch(
      `https://weather-app-api-8xh1.onrender.com/weather?city=${city}`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      const data = await response.json();

      await client.set(cacheKey, JSON.stringify(data), {
        EX: 60 * 60,
      });

      return res.json(data);
    } else {
      return res.status(response.status).json({
        error: "api",
      });
    }
  } catch (err) {
    return res.status(500).json({ error: "network" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
  await client.quit()
  process.exit()
})
