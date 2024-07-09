import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import User from "../models/userModal.js";


passport.use( new GoogleStrategy({
    // don't forget to update credential form env
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    const newGoogleUser = {
        googleId : profile.id,
        username : profile.username,
        email : profile.emails[0].value,
    };
    try {
        console.log(profile);
        const googleUser = await User.findOne({googleId : profile.id});
        if (googleUser) {
            done(null, googleUser);
        } else {
           const user = await User.create(newGoogleUser).save();
           done(null, user);
        }

    } catch (err) {
        console.error('error on the google Oauth2.0',err);
    }
}));

passport.use( new GitHubStrategy({
    // don't forget to update credential form env
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
    const newGithubUser = {
        githubId : profile.id,
        username : profile.username,
        email : profile.emails[0].value,
    }
    try {
        const githubUser = await User.findOne({githubId : profile.id});
        if (githubUser) {
            done(null, githubUser);
        } else {
            const user = await  User.create(newGithubUser).save();
            done(null, user);
        }

    } catch(err) {
        console.error('error on the github Oauth2.0',err);
    }
    console.log(profile);
}));

// serializeUser for the session
passport.serializeUser((user, done) =>{
    done(null, user);
});

// Deserialize user from the session
passort.deserializeUser((obj, done) => {
    done(null, obj);
});