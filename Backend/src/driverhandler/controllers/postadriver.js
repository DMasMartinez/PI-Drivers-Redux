const { Driver } = require('../../db')

const postadriver = (driver) =>{
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
    const drive = Driver.create(newdriver)
    return drive
}

module.exports = postadriver;