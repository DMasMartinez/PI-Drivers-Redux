const arrayfromapitosee = require('../helper/arrayfromapitosee')
const objectfromapitosee = require('../helper/objectfromapitosee')

const getdriverbyname = async(query)=>{
    
    await fetch(`http://localhost:5001/?name.forename=${query.name.forename}`)
        .then(res=>res.json())
        .then(data=>data[0])
        .then(data=>objectfromapitosee(data))

    return data


}

module.exports = getdriverbyname;