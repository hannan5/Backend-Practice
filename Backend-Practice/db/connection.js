const mongoose = require('mongoose');


const connectDB = (url) => {
    const connectionString = '';
    console.log(url,'url')
    return mongoose.connect(url)
        .then(() => {
            console.log('Database is Connect')
        })
        .catch((e) => {
            console.log(e);
        })
}
module.exports = connectDB