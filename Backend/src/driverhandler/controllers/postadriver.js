const { Driver } = require('../../db')

const postadriver = async(driver) =>{
    const {id,name,surname,description,image,nationality,birdate} = driver
    const newdriver = {
        "id":id,
        "name":name,
        "surname":surname,
        "description":description,
        "image":image,
        "nationality":nationality,
        "birdate":birdate
    }
    const drive = await Driver.create(newdriver)
    return drive
}

module.exports = postadriver;