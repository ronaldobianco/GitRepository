require('dotenv').config()

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.BD_NAME , process.env.BD_USER , process.env.BD_PASSWORD , {
  dialect: 'postgres',
  hots:process.env.HOTS
})
sequelize.sync()
module.exports = sequelize;