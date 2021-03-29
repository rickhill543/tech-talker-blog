const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'John Doe',
    email: 'johndoe@email.email',
    password: 'password123'
  },
  {
    username: 'Jane Doe',
    email: 'janedoe@email.email',
    password: 'password123'
  },
  {
    username: 'Bob Smith',
    email: 'bobsmith@email.email',
    password: 'password123'
  },
  {
    username: 'Barb Smith',
    email: 'barbsmith@email.email',
    password: 'password123'
  },
  {
    username: 'Super Double Dragon',
    email: 'sdd@email.email',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
