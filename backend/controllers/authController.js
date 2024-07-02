import User from "../models/userModal.js";

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
        await newUser.save();
        res.status(200).json({
            message: "Registration Successfull",
            newUser
        })
        console.log("Registration endpoint called");
    } catch (err) {
        res.status(400).json({ error: err.message });
        console.log("error registering User", err);
    }
}

// LoginController
const LoginController = async (req, res) => {
    const { email, password } = req.body; 
    try {
        if( !email || !password ) {
            res.status(400).json({
                message: "all field are required"
            });
            return;
        }

        const user = await User.findOne({ email });
        
        if(!user) {
            res.status(400).send("User does not exits");
        }
        if(password !== user.password ) {
            res.status(400).send("Incorrect Credentials please try again");
        }

        // set jwt token for authorization

        res.status(200).send("Login Successfull");
        console.log("Login endpoint called");
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

export { RegisterController, LoginController };