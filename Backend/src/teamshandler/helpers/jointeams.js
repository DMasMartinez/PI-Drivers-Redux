

const jointeams = (array) =>{
    // const newarray = []
    // for (var i=0;i<array.length;i++){
    //     newarray.push(array[i])
    // }
    // const arraysinduplicados = new Set(newarray)
    // const actualarray = [...arrysinduplicados]
    // return actualarray
    const { teams } = array[0]
    const newobject = {
        "teams":teams
    }
    return newobject
}

module.exports = jointeams;