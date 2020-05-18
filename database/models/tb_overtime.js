'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_overtime = sequelize.define('tb_overtime', {
    user_id: DataTypes.INTEGER,
    reason: DataTypes.TEXT,
    date: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {});
  tb_overtime.associate = models => {
    // associations can be defined here
  };
  return tb_overtime;
};