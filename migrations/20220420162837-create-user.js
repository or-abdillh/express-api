'use strict';

const { DataTypes } = require('sequelize')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true
      },
      fullname: {
        type: DataTypes.STRING(55),
        allowNull: true,
        defaultValue: 'Fulan Bin Fulan'
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'st. freedom of jhon'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
