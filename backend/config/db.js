// MongoDB Connection
import mongoose from 'mongoose';
dotenv.config();

// mongo URL form env
const mongoURI = process.env.mongoURI; 

mongoose.connect(mongoURI)
.then(() => {
  console.log('Connection to database successfull');
})
.catch((err) => {
  console.log("error in connecting to database", err);
})

module.exports = mongoose;
