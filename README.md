# 🌤️ Cloudora Weather App

A modern weather web application that provides real-time weather data and a 14-day forecast for any selected location. The project is built as a monorepo with a clear separation between frontend and backend responsibilities.

The application includes a user-friendly interface with unit conversion (Celsius <-> Fahrenheit), error handling, smooth animations and many more.

---

## 📸 Preview

### 🌦️ Current weather

![Current weather](./assets/current-weather.png)

<br>

### 📊 Forecast

![Forecast](./assets/forecast.png)

---

## ✨ Features

### 🌍 Weather functionality

- Current weather data for any city
- 14-day weather forecast
- Integration with **Visual Crossing API** (external API)
- Backend proxy layer (BFF pattern)

### 🎨 Frontend experience

- Modern, clean UI design
- Loading spinner animation during data fetching
- Visual error handling (e.g. invalid city or network error)
- Temperature unit switch (°C / °F) via UI toggle
- Weather icons using **Material Design Icons (MDI)** for better UX

### ⚙️ Architecture & code quality

- Monorepo structure (frontend + backend separation)
- Clean Architecture principles (separation of concerns, maintainable structure)
- Clean code principles (e.g. DRY, modular and reusable code, readability focus)
- ESLint for static code analysis
- Prettier for consistent formatting
- Modular JavaScript structure (vanilla JS + Webpack bundler)

### 🔒 Backend & security

- Node.js + Express backend
- Backend-for-Frontend (BFF) / middleware layer
- Secure API key management using environment variables (Render)
- CORS enabled for secure cross-origin communication
- Rate limiting for request control
- Caching layer (external API calls reduced and performance improved)

### 🐳 Docker & Containerization

- Full containerization: Automated setup with `docker-compose` for local development
- Environment isolation: Frontend and backend run in separate containers, communicating via internal Docker networking
- Consistent environment: Same runtime environment for development and production testing

### 🚀 Planned improvements

- Full mobile responsiveness (currently optimized for desktop/laptops)
- Enhanced performance optimizations and scalability improvements

---

## 🔄 How it works

1. User enters a city in the frontend UI
2. Frontend sends request to backend (Express BFF layer)
3. Backend communicates with Visual Crossing API
4. Data is processed and returned to frontend
5. UI dynamically renders the weather forecast

---

## 🛠️ Tech Stack

### Frontend

- HTML
- CSS (modular structure + reset.css)
- Vanilla JavaScript (ES6+)
- Webpack (module bundler) with `webpack-merge`
- ESLint
- Prettier
- Material Design Icons (MDI)

### Backend

- Node.js
- Express.js
- Visual Crossing Weather API
- CORS middleware
- Redis

### Deployment

- Frontend: Netlify
- Backend: Render
- Redis: Upstash

### Dev Tools

- Git & GitHub (VCS / monorepo)
- Docker (containerization)

---

## 🔐 Security & Deployment Notes

- **Secret Management:** API key and sensitive credentials (including Upstash Redis connection strings) are stored as environment variables. They are never exposed in the source code.
- **Secure Proxying:** The backend acts as a secure intermediary (BFF pattern), shielding the frontend from direct exposure to external API credentials.
- **Environment-Specific Configuration:**
  - **Local Development:** Uses local `.env` file and Docker environment injection.
  - **Production Deployment:** Securely utilizes platform-native environment variable management:
    - **Netlify:** Manages frontend-related environment configuration.
    - **Render:** Manages backend and database (Upstash Redis) integration.

---

## 🤝 Acknowledgments

Special thanks to [pkrzysiekk](https://github.com/pkrzysiekk) for his contribution to the project. He implemented the **Docker containerization** strategy, and integrated **Redis caching** and **rate limiting** to significantly improve performance and API reliability.

---

## ⚖️ License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🌐 Live Demo

_Live version is available in the **About section of this repository** 👉 Netlify deployment link_
