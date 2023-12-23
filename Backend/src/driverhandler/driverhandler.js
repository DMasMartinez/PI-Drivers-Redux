
const { Router } = require('express')

const driverhandler = Router()
const getalldrivers = require('./controllers/getalldrivers')
const getdriverbyid = require('./controllers/getdriverbyid')
const getdriverbyname = require('./controllers/getdriverbyname')
const postadriver = require('./controllers/postadriver')
// driverhandler.get('/',(req,res)=>{
//     const getdrivers = getalldrivers()
//     res.status(200).json(getdrivers)
// })

driverhandler.get('/:idDriver',async(req,res)=>{
    const {idDriver} = req.params
    const getdriver = await getdriverbyid(idDriver)
    res.status(200).json(getdriver)
})

driverhandler.get('/',async(req,res)=>{
    
    try {
        const {name} = req.query
        const getdriver = name?await getdriverbyname({name}):await getalldrivers()
        res.status(200).json(getdriver)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    // const getdriver = nationality?await getdriverbyname(req.query.nationality):await getalldrivers()
})

driverhandler.post('/',(req,res)=>{
    const {id,name,surname,description,image,nationality,birdate} = req.body
    const postdriver = postadriver({id,name,surname,description,image,nationality,birdate})
    res.status(200).json(postdriver)
})

module.exports = driverhandler;