import { Card } from 'react-bootstrap';

export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <Card className="mt-4 text-center">
      <Card.Body>
        <Card.Title>
          {data.location.name}, {data.location.country}
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          {data.current.condition.text}
        </Card.Subtitle>

        <Card.Text>
          {data.current.temp_c}°C
        </Card.Text>

        <Card.Text>
          Humidity: {data.current.humidity}%
        </Card.Text>

        <Card.Text>
          Wind: {data.current.wind_kph} kph
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
