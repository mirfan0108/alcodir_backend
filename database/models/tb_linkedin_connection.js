'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_linkedin_connection = sequelize.define('tb_linkedin_connection', {
    user_id: DataTypes.INTEGER,
    user: DataTypes.STRING,
    link: DataTypes.STRING,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  tb_linkedin_connection.associate = models => {
    // associations can be defined here
  };
  return tb_linkedin_connection;
};