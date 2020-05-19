require('dotenv').config()
const models = require('../../../database/models');
const { validationResult } = require('express-validator');

module.exports = {
    createVpointRequest: (req, res) => {

        try {
            //validate
            const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
            if (!errors.isEmpty()) {
                res.status(422).json({ errors: errors.array() });
                return;
            }                      
            let form = { sldr_user_id, mgm_user_id, reason, point } = req.body            


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
            res.status(error.code || 500).send(error)
        }
                        
    },

    reviewVpointRequest: (req, res) => {

        try {
            var bodyResponse = {
                vpoint_request_id: false,                                
                mgm_user_id: false,                                
                status: false,                                                
            }         

            //Validate vpoint_request_id
            req.body.vpoint_request_id ? bodyResponse.vpoint_request_id = true : bodyResponse.vpoint_request_id = false
            //Validate mgm_user_id
            req.body.mgm_user_id ? bodyResponse.mgm_user_id = true : bodyResponse.mgm_user_id = false                                    
            //Validate status
            req.body.status ? bodyResponse.status = true : bodyResponse.status = false         
                                    
            if(bodyResponse.vpoint_request_id && bodyResponse.mgm_user_id && bodyResponse.status){

                var hasVpointRequest = function(vpointRequest){
                    // return the promise itself
                    return models.tb_vpoint_request.find({
                        where: {
                           id: bodyResponse.vpoint_request_id
                        }
                     }).then(function(device) {
                        if (!vpointRequest) {
                            return 'not find';
                        }
                        return vpointRequest;
                     });
                }

                if(hasVpointRequest){
                    let form = {
                        vpoint_request_id: req.body.sldr_user_id,
                        mgm_user_id: req.body.mgm_user_id,
                        status: req.body.status,                    
                    }
        
                    models.tb_vpoint_request_list.create(form)
                    .then(_result => {
                        if(_result) {
                            res.status(200).json({
                                type: "Vpoint Request Review List",
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
                }else{                
                    res.send('Required All Field!')
                } 


                
            }else{                
                res.send('Required All Field!')
            }        

        } catch (error) {
            res.status(error.code || 500).send(error)
        }
                        
    }
}