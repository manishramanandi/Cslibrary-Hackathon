import express from 'express';
import passport from 'passport';
const route = express.Router();
import { RegisterController, LoginController } from '../controllers/authController.js'; 

// registration route
route.post('/register', RegisterController);
// login route
route.post('/login', LoginController);

// Google OAuth routes
route.get('/google',passport.authenticate('google',{scope : ['profile', 'email']}));
route.get('/google/callback',passport.authenticate('google',{ failureRedirect: '/login' }), (req, res) => {
    // redirect to the page that the will see after login eg home 
    route.redirect('/home');
});


// GitHub OAuth routes
route.get('/github',passport.authenticate('github',{scope : ['user: email']}));
route.get('/github/callback',passport.authenticate('gihub',{ failureRedirect: '/login' }), (req, res) => {
    // redirect to the page that the will see after login eg home 
    route.redirect('/home');
})

export default route;