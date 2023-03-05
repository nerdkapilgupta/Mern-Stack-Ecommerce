require('dotenv').config({ path: './config/config.env'});
const connectDb = require('./config/database')

const app = require('./app')

console.log(process.env.PORT )
// const dotenv = require('dotenv')


connectDb()
// dotenv.config({path: './config/config.env'})
app.listen(process.env.PORT , ()=> {

    console.log('server started on port', `${process.env.PORT} in env ${process.env.NODE_ENV}`)
})