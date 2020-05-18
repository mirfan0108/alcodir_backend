require('dotenv').config()
const models = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    createVpointRequest: (req, res) => {
        let form = {
            sldr_user_id: req.params.sldr_user.id,
            sldr_user_id: req.params.mgm_user.id,
            reason: req.body.reason,
            point: req.body.point,            
        }
        try {
            models.tb_vpoint_request.create(form)
            .then(_result => {
                if(_result) {
                    res.status(200).json({
                        type: "Vpoint Request",
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