// pages/index.js
'use client';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';

export default function Home() {

  const [ weatherData, setWeatherData ] = useState(null);

  const handleSearch = (city) => {
    const mock = {
      name: city,
      weather: [
        {
          description: 'sunny',
        },
      ],
      main: {
        temp: 298.15, // around 25°C
        humidity: 60,
      },
      wind: {
        speed: 3.5,
      },
    };

    setWeatherData(mock);
  };


  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard data={weatherData} />
    </Container>
  );
}
