const chalk = require('chalk');
const Sequelize = require('sequelize');
// const DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;

console.log(chalk.yellow('\nOpening connection to PostgreSQL'));

// create the database instance
// module.exports = new Sequelize("postgres://postgres@localhost:5432/omdb", {
//   logging: false, // set to console.log to see the raw SQL queries
//   operatorsAliases: Sequelize.Op, // set operators
// });

const host = process.env.HOST || 'localhost'
module.exports = new Sequelize('postgres', 'postgres', 'postgres', {
   host: host,
   dialect: 'postgres',
});




