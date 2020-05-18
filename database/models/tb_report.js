'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_report = sequelize.define('tb_report', {
    user_id: DataTypes.INTEGER,
    mood_id: DataTypes.INTEGER,
    report: DataTypes.TEXT,
    advice: DataTypes.TEXT,
    review: DataTypes.TEXT,
    status: DataTypes.INTEGER
  }, {});
  tb_report.associate = models => {
    // associations can be defined here
  };
  return tb_report;
};