import React, { useState } from 'react';
import eventsServices from '../services/EventService'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewEventForm = ({getData}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');


    const setInfo = e => {
        e.preventDefault();

        const NewEvent = {
            title: title,
            description: description,
            img: img
        }
        eventsServices.setEvent(NewEvent);

        setTitle('');
        setDescription('');
        setImg('');
        getData();
    }

    return (
        <div>
            <Container className='mt-2' style={{ width: '50%' }}>
                <Form onSubmit={setInfo}>
                    <Form.Group className="mb-1" controlId="formGroupTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name='title'
                            
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formGroupPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name='description'
                            
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description"
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formGroupPassword">
                        <Form.Label>Img</Form.Label>
                        <Form.Control
                            type="text"
                            name='img'
                            
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            placeholder="Enter img url:" />
                    </Form.Group>
                    <Button className='m-2' variant="outline-primary" type="submit">
                        Patvirtinti
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default NewEventForm
