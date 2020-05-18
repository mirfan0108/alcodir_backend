'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_log = sequelize.define('tb_log', {
    user_id: DataTypes.INTEGER,
    logs: DataTypes.TEXT
  }, {});
  tb_log.associate = models => {
    // associations can be defined here
  };
  return tb_log;
};