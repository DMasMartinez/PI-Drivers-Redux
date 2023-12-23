
const { Driver } = require('../../db')
const getalldrivers=()=>{
    const showdriver = Driver.findAll()
    return showdriver
}

module.exports = getalldrivers;