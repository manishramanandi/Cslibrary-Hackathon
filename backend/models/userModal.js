import mongoose from 'mongoose';

const userShcema = new mongoose.Schema({
    username : {
        require : true,
        type : String, 
    },
    email : {
        require : true,
        type : String,
        unique : true 
    },
    password : {
        require : true,
        type : String, 
    }
})
module.exports = mongoose.model('User',userShcema);
