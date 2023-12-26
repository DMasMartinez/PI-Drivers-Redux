
const server = require('./src/server')
const {database} = require('./src/db')
const getdriverbyname = require('./src/driverhandler/controllers/getdriverbyname')
const getteams = require('./src/teamshandler/controllers/getteams')



database.sync({force:true}).then(async()=>{
    await server.listen(3002,()=>{
        console.log('servidor abierto en terminal 3002')
    })



    try {
        const result = await getteams();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}).catch((err)=>console.log(err))

// database.sync({force:true}).then(()=>{
//     server.listen(3002,()=>{
//         console.log('servidor abierto en terminal 3002')
//     })



//     try {
//         const result = await getdriverbyname("Nick");
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

// }).catch((err)=>console.log(err))
