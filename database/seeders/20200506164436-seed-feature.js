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
    return queryInterface.bulkInsert('tb_features', [
      {
        name: 'Main',
        type: 'menu',
        parent_id: 0,
      },
      {
        name: 'dashboard',
        type: 'menu',
        parent_id: 1,
      },
      {
        name: 'User Management',
        type: 'menu',
        parent_id: 0,
      },
      {
        name: 'Account',
        type: 'menu',
        parent_id: 3,
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
    return queryInterface.bulkDelete('tb_features', null, {});
  }
};
