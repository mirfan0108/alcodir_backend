'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_role = sequelize.define('tb_role', {
    name: DataTypes.STRING
  }, {});
  tb_role.associate = models => {
    // associations can be defined here
  };
  return tb_role;
};