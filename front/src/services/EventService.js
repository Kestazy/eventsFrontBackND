import axios from 'axios';

const getEvents = async () => {
    try {
        const response = await axios.get('/api/events')
        if(response.data !== undefined){
            return response.data;
        }
    } catch (error) {
        console.log(error)
    }
}

const setEvent = async (event)=>{
    try {
        const response = await axios.post('/api/event', event);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const updateEvent = async (event)=>{
    try {
        const response = await axios.put('/api/event/:id', event);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const deleteEvent = async (event)=>{
    try {
        const response = await axios.delete('/api/events/:id', event);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const transactionsService = {
    getEvents,
    setEvent,
    updateEvent,
    deleteEvent
}

export default transactionsService