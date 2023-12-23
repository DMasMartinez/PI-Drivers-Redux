

const jointeams = (array) =>{
    const newarray = []
    for (var i=0;i<array.length;i++){
        newarray.push(array[i])
    }
    const arraysinduplicados = new Set(newarray)
    const actualarray = [...arrysinduplicados]
    return actualarray
}

module.exports = jointeams;