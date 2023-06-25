import React, { useState, useEffect } from 'react';
import eventsServices from '../services/EventService'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NewEventForm from './NewEventForm';
import Container from 'react-bootstrap/esm/Container';

const EventCard = () => {
    const [events, setEvents] = useState([]);

    const getData = () => {
        eventsServices.getEvents().then(res => {
            if (res !== undefined) {
                setEvents([...res])
            }
        })
    }

    useEffect(() => {
        getData()
    }, []);

    console.log(events)

    return (
        <div>
            <NewEventForm getData={getData} />
            {
                events.length > 0 ? (
                    <Container className='mt-5'>
                        {events.map((item, index) => (
                            <Card className='d-inline-flex m-2' key={index} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Button variant="outline-danger">Delete</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Container>
                ) : (<h3 className='mt-5'>Renginiu nera</h3>)
            }
        </div>
    )
}

export default EventCard