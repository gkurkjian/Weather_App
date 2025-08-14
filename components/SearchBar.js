import { Form, Button, InputGroup } from 'react-bootstrap';

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
            <InputGroup>
                <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter city name"
                    required
                />
                <Button type="submit" variant="primary">Search</Button>
            </InputGroup>
        </Form>
    );
}