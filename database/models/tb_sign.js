'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_sign = sequelize.define('tb_sign', {
    user_id: DataTypes.INTEGER
  }, {});
  tb_sign.associate = models => {
    // associations can be defined here
    tb_sign.belongsTo(models.tb_user, {foreignKey: 'user_id', as: 'signed'})
  };
  return tb_sign;
};