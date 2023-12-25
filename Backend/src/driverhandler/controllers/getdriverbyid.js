const objectfromapitosee = require('../helper/objectfromapitosee')

const { Driver } = require('../../db')

const getdriverbyid=async(id)=>{
    // const alldrivers = getalldrivers()

    const driver = await    Driver.findByPk(id)
    if (driver!==null){
        return driver.dataValues
    }

    const getalldrivers = await fetch(`http://localhost:5001/drivers/${id}`)
    const showdriver = await getalldrivers.json()

    const newobject = await Driver.create(objectfromapitosee(showdriver))
    // const newobj =  objectfromapitosee(showdriver)
    return newobject
}

module.exports = getdriverbyid;