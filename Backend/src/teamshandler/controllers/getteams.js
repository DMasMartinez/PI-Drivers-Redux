const { Team } = require('../../db')
const jointeams = require('../helpers/jointeams')
const axios = require('axios')

const getteams = async() =>{
    const teams = Team.findAll()
    if (teams!==null){
        return teams.dataValues
    }

    const alldrivers = await axios.get('http://localhost:5001/drivers')
    const data = await alldrivers.json()
    // const equipos = Array.from(new Set(data.map(driver => driver.team)))
    const equipos = data.data.map(driver => driver.teams)
    // const driversjson = await alldrivers.json()
    // const allteams = jointeams(driversjson)
    // allteams.map((team)=>Team.create(team))
    return equipos
    
}

module.exports = getteams;