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
    return queryInterface.bulkInsert('tb_profiles', [
      {
        first_name: 'Jhony',
        last_name: 'Indo',
        phone_number: '081323492312',
        avatar: 'user-4.jpg',
        user_id: 1
      },
      {
        first_name: 'Jhony',
        last_name: 'Arap',
        phone_number: '081323492312',
        avatar: 'user-4.jpg',
        user_id: 2
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
    return queryInterface.bulkDelete('tb_profiles', null, {});
  }
};
