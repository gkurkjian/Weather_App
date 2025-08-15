import { useState } from 'react';
import { Container, Alert, Spinner } from 'react-bootstrap';
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

      if (!res.ok) throw new Error('City not found');

      const data = await res.json();
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
      {/* This we are importing from SearchBar.js */}
      <SearchBar onSearch={handleSearch} />
      
      {loading && (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="mt-4 text-center">
          {error}
        </Alert>
      )}

      {/* This we are importing from WeatherCard.js */}
      <WeatherCard data={weatherData} />  
    </Container>
  );
}
