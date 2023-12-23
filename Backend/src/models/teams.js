
const { DataTypes } = require('sequelize')
const database = require('../db')

module.exports = (database) =>{
    database.define("Team",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:true
            },
        
    },
    
    )
}