const mongoose = require('mongoose');

const excuseSchema = new mongoose.Schema({
    http_code: { type: Number, required: true },
    tag: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true }
  });

const Excuse = mongoose.model('Excuse', excuseSchema);

module.exports = Excuse;
