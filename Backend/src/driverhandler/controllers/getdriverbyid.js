const objectfromapitosee = require('../helper/objectfromapitosee')

const { Driver } = require('../../db')

const getdriverbyid=async(id)=>{
    // const alldrivers = getalldrivers()
    const driver = Driver.findByPk(id)
    if (driver!==null){
        return driver.dataValues
    }

    const getalldrivers = await fetch(`http://localhost:5001/drivers/${id}`)
    const showdriver = await getalldrivers.json()
    // const getdriver = alldriver.filter((driver)=>driver.id===id)
    const newobject = Driver.Create(objectfromapitosee(showdriver))
    return newobject
}

module.exports = getdriverbyid;