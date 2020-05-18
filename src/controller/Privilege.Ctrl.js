require('dotenv').config()
const models = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    navigator: (req, res) => {
        models.tb_privilege.findAll({
            attributes: ['id'],
            where: {
                user_id: req.user.id,
                role_id: req.user.role,
                can_read: 1
            },
            include: [
                {
                    model: models.tb_feature,
                    where: {
                        type: 'menu'
                    },
                    as: 'navigation'
                }
            ]
        })
        .then(_res => {
            if(_res && _res.length > 0) {
                let payload = {
                    type: 'privilege',
                    id: _res.id,
                    attributes: {
                        menu: _res.navigation
                    }
                }
                res.status(200).json(payload)
            } else {
                res.status(200).json({code: 404, message: 'This user have not privilege yet'})
            }
        })    
    }
}
