require('dotenv').config()
const models = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (req, res) => {
        try {
            models.tb_user.findOne({ 
                where: { 
                    username: req.body.username 
                },
                include: [
                    {
                        model: models.tb_sign,
                        as: 'signed'
                    },
                    {
                        model: models.tb_profile,
                        as: 'profile'
                    }
                ] 
            })
            .then(async _getuser => {
                if(_getuser && _getuser.password) {
                    if(_getuser.status == 1) {
                        if(_getuser.signed) {
                            res.status(200).json({success: false, message: 'Not allowed, you are already signed!'})
                        } else {
                            const userChecking = await bcrypt.compareSync(req.body.password, _getuser.password);
                            if(userChecking) {
                                const expired = new Date().getTime() + (1*60*60*1000)
                                var token = await jwt.sign(
                                    { 
                                        id: _getuser.id,
                                        username: _getuser.username, 
                                        role: _getuser.role_id, 
                                        expired: expired 
                                    }, process.env.APP_SECRET );
                                if(token) {
                                    return models.tb_sign.create({user_id: _getuser.id})
                                    .then(_signed => {
                                        return models.tb_log.create({
                                            user_id: _getuser.id,
                                            logs: JSON.stringify({
                                                type: 'sign',
                                                method: 'post',
                                                message: `${_getuser.username} have been signed in`
                                            })
                                        })
                                        .then(_loged => {
                                            return res.status(200).json({
                                                success: true,
                                                type: 'token',
                                                content: {
                                                    access_token: token,
                                                    type: 'Bearer',
                                                    expired: expired
                                                },
                                                attributes: {
                                                    profile: {
                                                        first_name: _getuser.profile.first_name,
                                                        last_name: _getuser.profile.last_name,
                                                        links: [
                                                            {
                                                                name: 'avatar',
                                                                url: _getuser.profile.avatar ? `${process.env.BASE_URL}/${process.env.BASE_PREFIX}/static/avatar/${_getuser.profile.avatar}` : `${process.env.BASE_URL}/${process.env.BASE_PREFIX}/static/avatar/default-user.png`
                                                            }
                                                        ]
                                                    }
                                                }
                                            })
                                        })
                                    })
                                } else {
                                    res.status(200).json({code: 500, message: "generate token is failed!"})
                                }
    
                            } else {
                                res.status(200).json({code: 404, message: "Invalid username or password!"})
                            }
                        }
                    } else {
                        res.status(200).json({code: 405, message: 'Your account is not activated yet, please contact administator for activate'})
                       
                    }
    
                } else {
                    res.status(200).json({code: 200, message: "Invalid username or password!"})
                }
            })
        } catch (error) {
            switch (error.code) {
                case 404:
                    return res.status(error.code).send(error)
                case 405:
                    return res.status(error.code).send(error)
                default:
                    return res.status(500).send()
            }
            
        }
    },

    logOut: (req, res) => {
        models.tb_sign.destroy({
            where: {
                user_id: req.user.id
            }
        }).then(_resp => {
            return models.tb_log.create({
                user_id: req.user.id,
                logs: JSON.stringify({
                    type: 'signout',
                    method: 'delete',
                    message: `${req.user.username} have been signed in`
                })
            }).then(__resp => {
                if(_resp) {
                    res.status(200).json({code: 200, success: true, type: 'sign', content: []})
                } else {
                    res.status(404).json({code: 200, success: true, type: 'sign', content: []})
                }
            })
        })
    }
}
