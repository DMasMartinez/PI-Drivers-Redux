

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
                unique:true
            },
        surname:{
                    type:DataTypes.STRING,
                    unique:true
                },
        description:{
                    type:DataTypes.STRING,
                    },
        image:{
                type:DataTypes.STRING,
                },
        nationality:{
                    type:DataTypes.STRING,
                    },
        birdate:{
                    type:DataTypes.STRING,
                },
        teams:{
            type:DataTypes.STRING,
        },
        description:{
            type:DataTypes.TEXT,
        },
        
    },
    
    )
}

