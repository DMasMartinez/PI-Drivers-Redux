const { Router } = require('express')
const getteams = require('./controllers/getteams')
const teamshandler = Router()

teamshandler.get('/',async(req,res)=>{
    try{
        const teams = await getteams()
        res.status(200).json(teams)
        // console.log(teams)

    }catch(error){
        res.status(500).json({error:error.message})
    }
})

module.exports = teamshandler;