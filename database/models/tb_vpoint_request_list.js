'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_vpoint_request_list = sequelize.define('tb_vpoint_request_list', {
    vpoint_request_id: DataTypes.INTEGER,
    mgm_user_id: DataTypes.INTEGER
  }, {});
  tb_vpoint_request_list.associate = function(models) {
    // associations can be defined here
    tb_vpoint_request_list.hasMany(models.tb_vpoint_request, {foreignKey: 'vpoint_request_id'})
    tb_vpoint_request_list.hasMany(models.tb_user, {foreignKey: 'sldr_user_id', foreignKey: 'mgm_user_id'})

  };
  return tb_vpoint_request_list;
};