import { Card } from 'react-bootstrap';
import 'animate.css';

export default function WeatherCard({ data }) {
  if (!data || !data.current) return null;

  return (
    <Card
      className="mt-4 p-4 shadow-lg border-0 animate__animated animate__fadeIn"
      style={{ maxWidth: '600px', margin: '0 auto' }}
    >
      <Card.Body className="text-center">
        <Card.Title as="h2" className="mb-2">
          {data.location.name}, {data.location.country}
        </Card.Title>

        <Card.Subtitle className="mb-3 text-muted fs-5">
          {data.current.condition.text}
        </Card.Subtitle>

        <Card.Text className="display-4 fw-bold mb-3">
          {data.current.temp_c}°C
        </Card.Text>

        <Card.Text className="mb-1">Humidity: {data.current.humidity}%</Card.Text>
        <Card.Text className="mb-0">Wind: {data.current.wind_kph} kph</Card.Text>
      </Card.Body>
    </Card>
  );
}
