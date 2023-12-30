
const objectfromapitosee2 = (data) =>{
    const newdata = data[0]
    const {id,name,number,image,nationality,teams,description,dob} = newdata
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
module.exports = objectfromapitosee2;    