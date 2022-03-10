const Sequelize = require('sequelize');
const database = require('../config/config')

const Repository = database.define('Repository', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    repositoryID:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    url:{
        type: Sequelize.STRING,
        allowNull: false
    },
    language:{
        type: Sequelize.STRING,
        allowNull: false
    },
});
module.exports = Repository;