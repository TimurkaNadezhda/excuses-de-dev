const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

dotenv.config();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.URL_DATABASE)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


app.listen(process.env.PORT || 3008, () => {
    console.log(`Site disponible à l'adresse suivante : http://${process.env.HOST}:${process.env.PORT ? process.env.PORT : 3008}`);
});
