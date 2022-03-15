require('dotenv').config()

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL , {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
})
sequelize.sync()
module.exports = sequelize;