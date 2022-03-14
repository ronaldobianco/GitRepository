require('dotenv').config()

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.BD_NAME , process.env.BD_USER , process.env.BD_PASSWORD , {
  dialect: 'postgres',

})
sequelize.sync()
module.exports = sequelize;