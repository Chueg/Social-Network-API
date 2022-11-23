const connection = require('../config/connection');
const { Thought, User } = require('../models');
const data = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});
  const users = [];
  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  process.exit(0);
});
