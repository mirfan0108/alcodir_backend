'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('tb_privileges', [
      {
        user_id: 1,
        role_id: 1,
        feature_id: 1,
        can_write: 1,
        can_read: 1,
        can_write: 1,
        can_remove: 1,
        can_edit: 1
      },
      {
        user_id: 1,
        role_id: 1,
        feature_id: 2,
        can_write: 1,
        can_read: 1,
        can_write: 1,
        can_remove: 1,
        can_edit: 1
      },
      {
        user_id: 1,
        role_id: 1,
        feature_id: 3,
        can_write: 1,
        can_read: 1,
        can_write: 1,
        can_remove: 1,
        can_edit: 1
      },
      {
        user_id: 1,
        role_id: 1,
        feature_id: 4,
        can_write: 1,
        can_read: 1,
        can_write: 1,
        can_remove: 1,
        can_edit: 1
      },
      {
        user_id: 2,
        role_id: 1,
        feature_id: 2,
        can_write: 1,
        can_read: 1,
        can_write: 1,
        can_remove: 1,
        can_edit: 1
      },
      {
        user_id: 2,
        role_id: 1,
        feature_id: 3,
        can_write: 1,
        can_read: 1,
        can_write: 1,
        can_remove: 1,
        can_edit: 1
      },
      {
        user_id: 2,
        role_id: 1,
        feature_id: 4,
        can_write: 1,
        can_read: 1,
        can_write: 1,
        can_remove: 1,
        can_edit: 1
      },
      {
        user_id: 2,
        role_id: 1,
        feature_id: 1,
        can_write: 1,
        can_read: 1,
        can_write: 1,
        can_remove: 1,
        can_edit: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('tb_privileges', null, {});
  }
};
