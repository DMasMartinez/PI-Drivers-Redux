const objectfromapitosee = require('../helper/objectfromapitosee')

const getdriverbyid=async(id)=>{
    // const alldrivers = getalldrivers()
    const getalldrivers = await fetch(`http://localhost:5001/drivers/${id}`)
    const showdriver = await getalldrivers.json()
    // const getdriver = alldriver.filter((driver)=>driver.id===id)
    const newobject = objectfromapitosee(showdriver)
    return newobject
}

module.exports = getdriverbyid;