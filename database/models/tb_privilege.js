'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_privilege = sequelize.define('tb_privilege', {
    role_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER,
    can_read: DataTypes.INTEGER,
    can_write: DataTypes.INTEGER,
    can_remove: DataTypes.INTEGER,
    can_edit: DataTypes.INTEGER
  }, {});
  tb_privilege.associate = models => {
    // associations can be defined here
    tb_privilege.belongsTo(models.tb_feature, {foreignKey: 'feature_id', as: 'navigation'})
  };
  return tb_privilege;
};