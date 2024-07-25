import User from "../models/userModal.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// RegisterController
const RegisterController = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if( !username || !email || !password ) {
            res.status(400).json({
                message: "all field are required"
            });
            return;
        }

        const newUser = new User({username, email, password});
        // hash password
        const salt = await bcrypt.genSalt(10); 
        User.password = await bcrypt.hash(password, salt);
        // save new user to the database 
        await newUser.save();

        // create jwt token
        const payload = { newUser: { id: User.id } };
        const jwt_Token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: 360000 });
        // sending response to the front end
        res.status(200).json({
            message: "Registration Successfull",
            newUser,
            jwt_Token
        })
        console.log("Registration endpoint called");
    } catch (err) {
        res.status(400).json({ error: err.message });
        console.log("error registering User", err);
    }
}

// LoginController
const LoginController = async (req, res) => {
    const { username, password } = req.body; 
    try {
        if( !username || !password ) {
            res.status(400).json({
                message: "all field are required"
            });
            return;
        }

        const user = await User.findOne({ username });
        
        if(!user) {
            return res.status(400).json({message: "User does not exits"});
        }
        if(password !== user.password ) {
            return res.status(400).send("Incorrect Credentials please try again");
        }
        // create jwt token
        const payload = { newUser: { id: user.id } };
        const jwt_Token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: 360000 });
        // sending response to the front end
        res.status(200).json({
            message :"Login Successfull",
            jwt_Token
        });
        console.log("Login endpoint called");
    } catch (err) {
        res.status(400).json({error: err.message});
        console.log('error login in user', err);
    }
}

export { RegisterController, LoginController };