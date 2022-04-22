'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        username: 'hans2340',
        fullname: 'Oka R. Abdillah',
        address: 'Handil Bakti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'mina1234',
        fullname: 'Mina Fitria',
        address: 'Anjir Pasar',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
