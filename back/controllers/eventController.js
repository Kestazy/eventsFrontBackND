const Events = require('../models/Event');

const asyncHandler = require('express-async-handler');

// @desc Create new events
// @route POST /api/events
// @access PUBLIC

const setEvent = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.description || !req.body.img) {
        res.status(400)
        throw new Error('Please add a title and description');
    }
    const transaction = await Events.create({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img
    });
    res.status(200).send(transaction);
});

// @desc update event
// @route PUT /api/events/:id
// @access PUBLIC

const updateEvent = async (req, res) => {
    // if (!req.body.name) res.status(404).send("not Found");
    const result = await Events.updateOne({
        _id: req.params.id,
    }, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            img: req.body.img
        }
    })
    // res.send(result)
    if (result.modifiedCount > 0) {
        res.status(200).send(`${req.body.title} "successfully updated"`)
    } else {
        res.status(200).send("data is the same")
    };
}

// @desc Get events
// @route Get /api/events
// @access PUBLIC

const getEvents = asyncHandler(async (req, res) => {
    // postman reiksme (user: 'req.body.id') ir lakinas iharkodinimas 
    const events = await Events.find({ user: req.body.id });
    if (!events) {
        res.status(400)
        throw new Error('Events not found');
    }
    res.status(200).send(events);
})

// @desc delete event
// @route DELETE /api/events/:id
// @access PUBLIC

const deleteEvent = asyncHandler(async (req, res) => {
    const result = await Events.findByIdAndRemove(req.params.id);

    (result === null) ? res.status(200).send(`There is no such ad id: '${req.params.id}'`) : res.status(200).send(`Ad ${result} deleted Successfully `)
})

module.exports = {
    setEvent,
    getEvents,
    updateEvent,
    deleteEvent
}