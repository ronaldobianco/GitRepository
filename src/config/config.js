const Sequelize = require('sequelize');
const sequelize = new Sequelize('Ateliware' , 'postgres' , 'D@rthV@d3r' , {
  dialect: 'postgres',
  hots:'localhost'
})
sequelize.sync()
module.exports = sequelize;