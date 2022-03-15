require('dotenv').config()

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'postgres',
  // host:process.env.DATABASE_URL,
  use_env_variable:process.env.DATABASE_URL,
  ssl:true,
  protocol: 'postgres',
  port:process.env.PORT,
  dialectOptions: {}
})
sequelize.sync()
module.exports = sequelize;