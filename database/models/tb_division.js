'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_division = sequelize.define('tb_division', {
    chief_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  tb_division.associate = models => {
    // associations can be defined here
  };
  return tb_division;
};