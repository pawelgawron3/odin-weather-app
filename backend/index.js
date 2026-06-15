import express from "express";
import cors from "cors";
import { createClient } from "redis";
import { Redis as UpstashRedis } from "@upstash/redis";

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.WEATHER_API_KEY;
const MAX_CONNECTIONS = 10;

app.use(cors());

let redisClient;
let isUpstash = false;

if (process.env.UPSTASH_REDIS_REST_URL) {
  isUpstash = true;
  redisClient = new UpstashRedis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  console.log("🚀 Running with Upstash Redis (Production)");
} else {
  redisClient = createClient({ url: "redis://redis:6379" });
  redisClient.on("error", (err) => console.log("Redis Client Error", err));
  await redisClient.connect();
  console.log("🟢 Running with Local Docker Redis");
}

const redis = {
  get: async (key) => await redisClient.get(key),
  // Upstash needs { ex: ... }, node-redis needs {EX: ... }
  set: async (key, val, options) => {
    const ttl = options?.ex || options?.EX;
    return isUpstash
      ? await redisClient.set(key, val, { ex: ttl })
      : await redisClient.set(key, val, { EX: ttl });
  },
  incr: async (key) => await redisClient.incr(key),
  expire: async (key, seconds) => await redisClient.expire(key, seconds),
};

// GET /weather?city=xxx
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required!" });

  const ip = req.ip;
  const rateKey = `rate:${ip}`;
  const count = await redis.incr(rateKey);
  if (count == 1) await redis.expire(rateKey, 60);
  if (count > MAX_CONNECTIONS) return res.status(429).send("Too many requests");

  const cacheKey = `weather:${city.toLowerCase().trim()}`;
  try {
    const cachedWeather = await redis.get(cacheKey);
    if (cachedWeather) {
      return res.json(
        typeof cachedWeather === "string"
          ? JSON.parse(cachedWeather)
          : cachedWeather,
      );
    }

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current%2Cdays&key=${API_KEY}&contentType=json`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      const data = await response.json();

      await redis.set(cacheKey, JSON.stringify(data), {
        EX: 3600, // 1h
      });

      return res.json(data);
    } else {
      return res.status(response.status).json({
        error: "api",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "network" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
  if (!isUpstash) await redisClient.quit();
  process.exit();
});
