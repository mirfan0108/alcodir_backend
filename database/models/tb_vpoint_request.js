'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_vpoint_request = sequelize.define('tb_vpoint_request', {
    sldr_user_id: DataTypes.INTEGER,
    mgm_user_id: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    point: DataTypes.INTEGER,    
    status: DataTypes.STRING
  }, {});
  tb_vpoint_request.associate = function(models) {
    // associations can be defined here
    tb_vpoint_request.hasOne(models.tb_user, {foreignKey: 'sldr_user_id'})
    tb_vpoint_request.hasOne(models.tb_user, {foreignKey: 'mgm_user_id'})

    tb_vpoint_request.belongsToMany(models.tb_user, { through: 'tb_vpoint_request_list' }) 
    
  };
  return tb_vpoint_request;
};