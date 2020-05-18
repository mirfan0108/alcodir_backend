'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_feature = sequelize.define('tb_feature', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    parent_id: DataTypes.INTEGER
  }, {});
  tb_feature.associate = models => {
    // associations can be defined here
    tb_feature.hasMany(models.tb_privilege, {foreignKey: 'feature_id', as: 'menu'})

  };
  return tb_feature;
};