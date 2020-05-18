'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_profile = sequelize.define('tb_profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    avatar: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  tb_profile.associate = models => {
    // associations can be defined here
    tb_profile.belongsTo(models.tb_user,{foreignKey: 'user_id'})
  };
  return tb_profile;
};