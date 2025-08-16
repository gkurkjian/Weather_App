# Weather App

This is a simple weather application built with **Next.js** and **React Bootstrap**. It allows users to search for the current weather in any city worldwide, view weather details, and toggle between light and dark modes.

## Features

- **Search by City:** Enter any city name to get the current weather.
- **Weather Details:** Displays temperature, humidity, wind speed, weather condition, and local time.
- **Responsive UI:** Uses React Bootstrap for a clean, responsive design.
- **Dark Mode:** Toggle between light and dark themes.
- **Animated Weather Card:** Weather details appear with a smooth animation.

## How It Works

- The app uses the [WeatherAPI.com](https://www.weatherapi.com/) service to fetch real-time weather data.
- When a user enters a city and submits, the app sends a request to the WeatherAPI endpoint:
  ```
  https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=CITY_NAME
  ```
- The API key is stored in an environment variable:  
  `NEXT_PUBLIC_WEATHER_API_KEY`
- The response is displayed in a styled card with weather details and an icon.

## Main Components

- **pages/index.js:** Main page, handles state, search logic, and layout.
- **components/SearchBar.js:** Input field for searching cities.
- **components/WeatherCard.js:** Displays weather information in a card.

## How to Run

1. **Clone the repository:**
   ```
   git clone <your-repo-url>
   cd Weather_Project/my-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up your WeatherAPI key:**
   - Create a `.env.local` file in the `my-app` directory.
   - Add your API key:
     ```
     NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
     ```

4. **Start the development server:**
   ```
   npm run dev
   ```

5. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Notes

- Only the "Weather App" text is clickable to reset the app state.
- The app does not reload the page when resetting; it simply clears the weather data and errors for a fast user experience.
- Make sure you have a valid API key from [WeatherAPI.com](https://www.weatherapi.com/).

---

**Author:**  
This project was created as a learning exercise to demonstrate React, Next.js, and