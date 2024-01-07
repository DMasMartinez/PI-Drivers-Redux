const { Team } = require('../../db')
const jointeams = require('../helpers/jointeams')
const separarcomas = require('../helpers/separarcomas')

const getteams = async() =>{
    // const teams = Team.findAll()
    // const newlist = []
    // if (teams!==null){
    //     return teams.dataValues
    // }

    const newlist = []
    const newlist2 = []
    const newlist3 = []
    const alldriver = await fetch('http://localhost:5001/drivers')
    const drivers = await alldriver.json()
    const teamsaso = drivers.filter((driver)=>(driver.teams)!==undefined)
    const onlyteams = teamsaso.map((driver)=>newlist.push(driver.teams))
    

    for (var i=0;i<=newlist.length-1;i++){
        var aux = newlist[i].split(',')
        newlist2.push(...aux)  
    }
    const arraysinespacios = newlist2.map((team)=>team.replace(/^\s+/g, ''))
    const newset = new Set(arraysinespacios)
    const newarray = Array.from(newset)
    return newarray
}

module.exports = getteams;