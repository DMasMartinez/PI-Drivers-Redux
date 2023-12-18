
const server = require('./src/server')
const {database} = require('./src/db')

database.sync({force:true}).then(()=>{
    server.listen(3002,()=>{
        console.log('servidor abierto en terminal 3002')
    })
}).catch((err)=>console.log(err))



