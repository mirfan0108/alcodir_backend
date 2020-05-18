require('dotenv').config()
const models = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    createReport_linkedin: (req, res) => {
        let form = {
            user_id: req.params.user.id,
            user: req.body.username,
            link: req.body.link,
            company: req.body.company,
            position: req.body.position,
            status: req.body.position
        }
        try {
            models.tb_linkedin_connection.create(form)
            .then(_result => {
                if(_result) {
                    res.status(200).json({
                        type: "Linked in Connection",
                        id: _result.id,
                        attributes: _result
                    })
                } else {
                    throw {code: 500, message: 'Failed to save'}
                }
            })
            .catch(err => {
                throw err
            })
        } catch (error) {
            res.status(error.code || 500).json(error)
        }
    }
}