'use client';
import { Container } from 'react-bootstrap';

export default function Home() {
    return (
        <Container className="py-5">
            <h1 className='mb-4 text-center'>Weather App</h1>
            <p className='text-center text-muted'>Search for any city to see its current weather.</p>
        </Container>
    );
}