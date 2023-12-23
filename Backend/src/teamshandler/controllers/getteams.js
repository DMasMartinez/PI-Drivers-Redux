const { Team,Driver } = require('../../db')
const jointeams = require('../helpers/jointeams')

const getteams = () =>{
    const teams = Team.findAll()
    if (teams!==null){
        return teams.dataValues
    }

    const alldrivers = fetch('http://localhost:5001/drivers')
    const driversjson = alldrivers.map((driver)=>driver.json())
    const drivers = driversjson.map((team)=>team.teams)
    const allteams = jointeams(drivers)
    allteams.map((team)=>Team.create(team))
    return allteams
    
}

module.exports = getteams;