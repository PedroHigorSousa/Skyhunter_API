const mongoose = require('mongoose');
const { request, response } = require('express');

const Computer = mongoose.model('Computer');

module.exports = {
    async index(req, res) {
        const computers = await Computer.find((err, result) => {
            if (err)
                res.send(err)
            else
                res.send(result)
        });

        return res.json(computers);
    },

    async storeComputer(req, res) {
        const computer = await Computer.create(req.body, (err, result) => {
            if (err)
                res.send(err)
            else
                res.send(result)
        });

        return response.json(computer);
    },

    async deleteComputer(req, res) {
        const { id } = req.params;

        const computer = await Computer.deleteOne({ "_id": id }, (err, result) => {
            if (err)
                res.send(err)
            else
                res.send(result)
        })

        return response.json(
            {
                'message': 'Success!'
            }
        )
    }
}