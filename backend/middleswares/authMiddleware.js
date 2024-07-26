import jwt from 'jsonwebtoken';
import User from "../models/userModal.js";

export const protect = async (req, res, next) => {
  let token;

  // Check if Authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract the token from the header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user and attach to the request object
      req.user = await User.findById(decoded.newUser.id).select('-password');

      // Proceed to the next middleware or route handler
      next();
    } catch (err) {
      console.error('Token verification error:', err);
      res.status(401).json({ msg: 'Not authorized, token is invalid' });
    }
  } else {
    res.status(401).json({ msg: 'Not authorized, no token provided' });
  }
};
