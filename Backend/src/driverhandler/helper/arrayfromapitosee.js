
const arrayfromapitosee = (data) =>{
    const {id,driverRef,number,image,nationality,teams} = data
    const newobject = {
        "id":id,
        "driverRef":driverRef,
        "number":number,
        "image":image.url,
        "nationality":nationality,
        "teams":teams
    }
    return newobject
}

module.exports = arrayfromapitosee;