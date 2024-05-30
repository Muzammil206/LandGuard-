// pages/api/register.js
import connectDB from '../../utils/db';
import User from '../../models/User';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body;
      // Validate user input

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create a new user document
      const newUser = new User({ name, email, password });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
} else if (req.method === 'GET') {
    // Handle GET request (if needed)
    res.status(200).json({ message: 'GET request received' });
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export {handler as Get, handler as post }
