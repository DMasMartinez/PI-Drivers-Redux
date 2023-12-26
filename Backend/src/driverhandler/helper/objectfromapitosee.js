const objectfromapitosee = (data) =>{
    const {id,name,number,image,nationality,teams,description,dob} = data
    const newobject = {
        "id":id,
        "name":name.forename,
        "surname":name.surname,
        "number":number,
        "image":image.url,
        "nationality":nationality,
        "teams":teams,
        "birdate":dob,
        "description":description
        
    }
    return newobject
}

module.exports = objectfromapitosee; 