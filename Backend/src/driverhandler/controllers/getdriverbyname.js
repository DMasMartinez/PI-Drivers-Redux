
const objectfromapitosee2 = require('../helper/objectfromapitosee2')
const { Driver } = require('../../db')

const getdriverbyname = async(query)=>{
    const newdriver = await Driver.findOne({where:query})
    if (newdriver!==null){
        return newdriver.dataValues
    }

    const driver = await fetch(`http://localhost:5001/drivers/?name.forename=${query.name}`)
    const data = await driver.json()
    const newobject = Driver.create(objectfromapitosee2(data))

    // const newobject = Driver.create(objectfromapitosee(data))
    return newobject
}

module.exports = getdriverbyname;