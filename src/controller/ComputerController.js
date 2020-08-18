const mongoose = require('mongoose');
const { request, response } = require('express');

const Computer = mongoose.model('Computer');

module.exports = {
    async index(req, res) {
        const computers = await Computer.find();

        return res.json(computers);
    },

    async storeComputer(req, res) {
        const computer = await Computer.create(req.body);

        return response.json(computer);
    }
}