'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_task = sequelize.define('tb_task', {
    id_report: DataTypes.INTEGER,
    task: DataTypes.STRING,
    point: DataTypes.INTEGER
  }, {});
  tb_task.associate = models => {
    // associations can be defined here
  };
  return tb_task;
};