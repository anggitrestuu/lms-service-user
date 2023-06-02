'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Anggit Restu Abadi',
        profession: 'Fullstack Javascript Developer',
        role: 'admin',
        email: 'anggit@gmail.com',
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Auwalli Ikhsani',
        profession: 'Front End Developer',
        role: 'student',
        email: 'ican@gmail.com',
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
