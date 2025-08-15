import { Form, Button, InputGroup, Row, Col } from 'react-bootstrap';

export default function SearchBar({ onSearch}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value.trim();
        if (city) {
            onSearch(city);
            e.target.reset();
        }
    }
    return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <InputGroup>
            <Form.Control
              type="text"
              name="city"
              placeholder="Enter city name"
            />
            <Button type="submit" variant="primary">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
}