import { Card } from 'react-bootstrap';

export default function WeatherCard({ data }) {
  if (!data) return null;

  console.log('WeatherCard data:', data);
  
  return (
    <Card className="mt-4 text-center">
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {data.weather[0].description}
        </Card.Subtitle>
        <Card.Text>
          {Math.round(data.main.temp - 273.15)}°C
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
