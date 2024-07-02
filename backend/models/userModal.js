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
},{ timestamps: true  })

const User = mongoose.model('users',userShcema);

export default User;
