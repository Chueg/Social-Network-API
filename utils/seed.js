const connection = require('../config/connection');
const { Thought, User } = require('../models');
const userSeeds = require('./userSeeds.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});
  // Drop existing users
  await User.deleteMany({});

  
  await User.create(userSeeds);


  // Log out the seed data to indicate what should appear in the database
  process.exit(0);
});
