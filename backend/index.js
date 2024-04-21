const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const session =  require("express-session");
const path = require('path');
const {validateExcuse} = require('./middlewares/excuseValidation');
const excusesController = require('./controllers/excusesController');
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/excuses', excusesController.getAllExcuses);
app.get('/excuses/random', excusesController.getRandomExcuse);

app.post('/excuses/add', validateExcuse, excusesController.addExcuse);

app.get('/excuses/create', (req, res) => {
  res.render('excuses/create-excuse', { title: 'Add New Excuse' });
});
app.get('/excuses', excusesController.getAllExcuses);

// app.get('/excuses', async (req, res) => {
//   try {
//       const excuses = await excusesController.getAllExcuses();
//       res.render('excuses/list-excuses', { title: 'List of Excuses', excuses });
//   } catch (error) {
//       console.error('Failed to get excuses:', error);
//       res.status(500).json({ error: 'Failed to get excuses' });
//   }
// });
app.use((req, res, next) => {
  
  if (req.session.errors) {
    res.locals.errors = req.session.errors;
    delete req.session.errors;
  } else {
    res.locals.errors = null;
  }

  if (req.session.formData) {
    res.locals.formData = req.session.formData;
    delete req.session.formData;
  } else {
    res.locals.formData = null;
  }

  next();
});

mongoose.connect(process.env.URL_DATABASE)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


app.listen(process.env.PORT || 3008, () => {
    console.log(`Site disponible à l'adresse suivante : http://${process.env.HOST}:${process.env.PORT ? process.env.PORT : 3008}`);
});

