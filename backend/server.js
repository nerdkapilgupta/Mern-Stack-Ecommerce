require('dotenv').config({ path: './config/config.env'});
const app = require('./app')

console.log(process.env.PORT )
// const dotenv = require('dotenv')

// dotenv.config({path: './config/config.env'})
app.listen(process.env.PORT , ()=> {

    console.log('server started on port', `${process.env.PORT} in env ${process.env.NODE_ENV}`)
})