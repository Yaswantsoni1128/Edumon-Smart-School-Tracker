const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const userModel = require('./models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
  res.send("server is running")
})

app.post('/signup', async (req, res) => {
  const { fullName, email, password, confirmPassword,isStudent } = req.body;

  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    
    
    const hashedPassword = await bcrypt.hash(password, 10);

  
    const newUser = new userModel({ fullName, email, password: hashedPassword, isStudent });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    
    const redMsg = newUser.isStudent ? "/student/dashboard" : "/school/dashboard" 
    return res.status(201).json({
      message: "Signup successful",
      user: { fullName, email },
      token,
      redirect: redMsg
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error signing up" });
  }
});

app.post('/login', async (req, res) => {
  const { email, password,isStudent } = req.body;

  
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    const redMsg = isStudent ? "/student/dashboard" : "/school/dashboard" 
    return res.status(201).json({
      message: "LOGIN successful",
      user: { email },
      token,
      redirect: redMsg
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error loging in" });
  }
});

const PORT = 4000
app.listen(PORT, () => {
  console.log("Server is running")
})