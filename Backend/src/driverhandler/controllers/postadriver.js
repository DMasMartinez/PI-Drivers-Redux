

const postadriver = (driver) =>{
    const {id,driverRef,number,image,nationality,teams} = driver
    const newdriver = {
        "id": id,
        "driverRef": driverRef,
        "number": number,
        "image": image,
        "nationality": nationality,
        "teams": teams
    }
    return newdriver
}

module.exports = postadriver;