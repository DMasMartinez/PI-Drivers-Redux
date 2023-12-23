require('dotenv').config()
const {Sequelize} = require('sequelize')
// hoooolllllaaaaa
const {USER,PASSWORD,HOST,PORT,BDD} = process.env;
const Driverfunction = require('./models/drivers')
const Teamsfunction = require('./models/teams')

const database = new Sequelize(
     `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
     { logging:false }
);
Driverfunction(database)
Teamsfunction(database)

const { Driver,Team } = database.models
Driver.belongsToMany(Team,{through:"DriversTeams"})
Team.belongsToMany(Driver,{through:"DriversTeams"})

module.exports = {
     database,
     ...database.models,
};