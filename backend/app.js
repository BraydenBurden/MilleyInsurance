const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb+srv://braydenburden00:FVc3CVJipeptRpwa@cluster0.c89heje.mongodb.net/MilleyInsurance', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection.useDb('MilleyInsurance');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB', db.name);
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  password: String,
  userType: String
}, { collection: 'users', dbName: 'MilleyInsurance' });

const User = mongoose.model('User', userSchema);

const carQuoteSchema = new mongoose.Schema({
  user: String,
  carValue: Number,
  driverAge: Number,
  vehiceAge: Number,
  accidents: Number,
  location: Number,
  premium: Number
}, { collection: 'carQuotes', dbName: 'MilleyInsurance'});

const CarQuote = mongoose.model('CarQuote', carQuoteSchema);

const homeQuoteSchema = new mongoose.Schema({
  user: String,
  homeAge: Number,
  heatingType: Number,
  dwellingType: Number,
  premium: Number
}, { collection: 'homeQuotes', dbName: 'MilleyInsurance'});

const HomeQuote = mongoose.model('HomeQuote', homeQuoteSchema);

const feedbackSchema = new mongoose.Schema({
  user: String,
  category: String,
  message: String,
}, { collection: 'feedback', dbName: 'MilleyInsurance'});

const Feedback = mongoose.model('Feedback', feedbackSchema);


router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/getProblems', async (req, res) => {
  try {
    const problems = await Feedback.find({ category: "problem" });
    res.json(problems);
  } catch {
    res.status(500).send(error);
  }
})

router.get('/getQuestions', async (req, res) => {
  try {
    const questions = await Feedback.find({ category: "question" });
    res.json(questions);
  } catch {
    res.status(500).send(error);
  }
})

router.get('/getCarQuotes', async (req, res) => {
  try {
    const carQuotes = await CarQuote.find({});
    res.json(carQuotes);
  } catch {
    res.status(500).send(error);
  }
})

router.get('/getHomeQuotes', async (req, res) => {
  try {
    const homeQuotes = await HomeQuote.find({});
    res.json(homeQuotes);
  } catch {
    res.status(500).send(error);
  }
})

router.post('/newFeedback', async (req, res) => {
  const { feedbackObj } = req.body;
  try {
    const newFeedback = new Feedback({
      user: feedbackObj.user,
      category: feedbackObj.category,
      message: feedbackObj.message
    });

    await newFeedback.save();

    res.status(200).json(newFeedback);
  } catch (error) {
    console.error("Contact Error:", error.message);
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.collection('users').findOne({email: email});
      if (user.length === 0) {
          return res.status(404).json({ message: "User not found" });
      }
      const matchedUser = user;
      if (matchedUser.password !== password) {
          return res.status(401).json({ message: "Incorrect password" });
      }

      res.status(200).json({ message: "Login successful", user: matchedUser });
  } catch (error) {
    console.log(error)
      res.status(500).json({ message: "Internal server error" });
  }
});

router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, age, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      age,
      password,
      userType: 'client'
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Signup Error:', error.message);
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
});

router.post('/newCarQuote', async (req, res) => {
  const { carQuoteObj } = req.body;
  console.log(carQuoteObj)

  try {
    const newCarQuote = new CarQuote({
      user: carQuoteObj.user,
      carValue: carQuoteObj.carValue,
      driverAge: carQuoteObj.driverAge,
      vehiceAge: carQuoteObj.vehiceAge,
      accidents: carQuoteObj.accidents,
      location: carQuoteObj.location,
      premium: carQuoteObj.premium
    });

    await newCarQuote.save();

    res.status(201).json(newCarQuote);
  } catch (error) {
    console.error('Car Quote Error:', error.message);
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
})

router.post('/newHomeQuote', async (req, res) => {
  const { homeQuoteObj } = req.body;
  console.log(homeQuoteObj)

  try {
    const newHomeQuote = new HomeQuote({
      user: homeQuoteObj.user,
      homeAge: homeQuoteObj.homeAge,
      heatingType: homeQuoteObj.heatingType,
      dwellingType: homeQuoteObj.dwellingType,
      premium: homeQuoteObj.premium,
    });

    await newHomeQuote.save();

    res.status(201).json(newHomeQuote);
  } catch (error) {
    console.error('Home Quote Error:', error.message);
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
})

app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
