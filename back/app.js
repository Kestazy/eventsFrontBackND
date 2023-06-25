require('dotenv').config();

const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();

app.use(express.json());

const {
    setEvent,
    getEvents,
    updateEvent,
    deleteEvent
} = require('./controllers/eventController')

app.post('/api/event', setEvent);
app.get('/api/events', getEvents);
app.put('/api/events/:id', updateEvent);
app.delete('/api/events/:id', deleteEvent);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})