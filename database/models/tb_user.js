'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_user = sequelize.define('tb_user', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    role_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  tb_user.associate = models => {
    // associations can be defined here
    tb_user.hasOne(models.tb_profile,{ foreignKey: 'user_id', as: 'profile' })
    tb_user.hasOne(models.tb_division, { foreignKey:'user_id', as: 'head_division' })
    tb_user.hasOne(models.tb_sign, {foreignKey: 'user_id', as: 'signed'})

    tb_user.hasMany(models.tb_log, { foreignKey: 'user_id', as: 'log' })
    tb_user.hasMany(models.tb_report, { foreignKey: 'user_id', as: 'report' })
    tb_user.hasMany(models.tb_privilege, {foreignKey: 'user_id', as: 'privilege'})
    tb_user.hasMany(models.tb_division, {foreignKey: 'user_id', as: 'division'})
    tb_user.hasMany(models.tb_linkedin_connection, {foreignKey: 'user_id', as: 'linkedin'})

  };
  return tb_user;
};