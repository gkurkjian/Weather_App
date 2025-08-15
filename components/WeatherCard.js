import { Card } from 'react-bootstrap';
import 'animate.css';

export default function WeatherCard({ data, darkMode }) {
  if (!data || !data.current) return null;

  const { location, current } = data;

  return (
    <Card
      className={`mt-4 p-4 shadow-lg border-0 animate__animated animate__fadeIn`}
      bg={darkMode ? 'secondary' : 'light'}
      text={darkMode ? 'light' : 'dark'}
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: darkMode ? '#143a40' : '', // Custom dark grey
      }}
    >

      <Card.Body className="text-center">
        {/* Weather icon */}
      <Card.Img
        src={`https:${current.condition.icon}`}
        alt={current.condition.text}
        className="mx-auto mb-3"
        style={{ width: '80px' }}
      />


        {/* City + Country */}
        <Card.Title as="h2" className="mb-2">
          {location.name}, {location.country}
        </Card.Title>

        {/* Local time */}
        <Card.Text className="text-muted mb-2" style={{ fontSize: '0.95rem' }}>
          Local Time: {location.localtime}
        </Card.Text>

        {/* Description */}
        <Card.Subtitle className="mb-3 text-capitalize">
          {current.condition.text}
        </Card.Subtitle>

        {/* Temperature */}
        <Card.Text className="display-4 fw-bold mb-3">
          {current.temp_c}°C
        </Card.Text>

        {/* Extras */}
        <Card.Text className="mb-1">Humidity: {current.humidity}%</Card.Text>
        <Card.Text className="mb-0">Wind: {current.wind_kph} kph</Card.Text>
      </Card.Body>
    </Card>
  );
}