const mongoose = require('mongoose');

const connectDb = ()=>{
mongoose.connect(process.env.DB_LOCAL_URI, {

    // useNewUrlParser: true,
    // useUnifiedTopologu:true,
    // useCreateIndex:true,
    // strictQuery: true

}).then(con => { 
    console.log(`mongodb ${con}`)
})




}

module.exports = connectDb