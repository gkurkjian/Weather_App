import { useState } from 'react';
import { Container, Alert, Spinner, Row, Col } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );

      const data = await res.json();

      if (!data.location) {
        throw new Error(`City '${city}' not found. Please try another one.`);
      }

      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Weather App</h1>

      {/* Empty state prompt */}
      { !weatherData && !loading && !error && (
        <p variant="info" className="text-center">
          Enter a city to get started 🌍
        </p>
      )}

      {/* This we are importing from SearchBar.js */}
      <SearchBar onSearch={handleSearch} />

      {/* Spinner while loading */}
      {loading && (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      )}

      {error && (
        <div style={{ maxWidth: '635px', margin: '0 auto' }}>
          <Alert variant="danger" className="mt-3 py-2 text-center">
            {error}
          </Alert>
        </div>
      )}



      {/* This we are importing from WeatherCard.js */}
      <WeatherCard data={weatherData} />  
    </Container>
  );
}
