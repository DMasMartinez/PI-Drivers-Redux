

const { DataTypes } = require('sequelize')
const database = require('../db')

module.exports = (database) =>{
    database.define("Driver",{
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
        surname:{
                    type:DataTypes.STRING,
                    allowNull:false,
                    unique:true
                },
        description:{
                    type:DataTypes.STRING,
                    allowNull:false
                    },
        image:{
                type:DataTypes.STRING,
                },
        nationality:{
                    type:DataTypes.STRING,
                    allowNull:false
                    },
        birdate:{
                    type:DataTypes.DATEONLY,
                    allowNull:false
                }
    },
    
    )
}

