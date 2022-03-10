const Sequelize = require('sequelize');
const sequelize = new Sequelize('Ateliware' , 'postgres' , 'D@rthV@d3r' , {
  dialect: 'postgres',
  hots:'localhost'
})
module.exports = sequelize;