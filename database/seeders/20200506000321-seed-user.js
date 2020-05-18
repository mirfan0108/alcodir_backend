const bcrypt = require('bcrypt');
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
    return queryInterface.bulkInsert('tb_users', [
      {
        username: 'administrator',
        email: 'administrator@mail.com',
        password: bcrypt.hashSync("password", 15),
        role_id: 1,
        status: 1
      },
      {
        username: 'administrator_',
        email: 'administrator_@mail.com',
        password: bcrypt.hashSync("password", 15),
        role_id: 1,
        status: 1
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
    return queryInterface.bulkDelete('tb_users', null, {});
  }
};
