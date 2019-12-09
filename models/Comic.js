const mongoose = require('mongoose');

const ComicSchema = new mongoose.Schema({
  cover: {
    type: String,
    default: 'no-photo.jpg'
  },
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  slug: {
    type: String,
  },
  price: {
    type: String,
    required: [true, "Please enter a valid price"],
    default: "$2.99",
  },
  series: {
    type: String
  },
  description: {
    type: String,
    required: [true, "Please enter a small description of the comic"]
  },
  heroes: {
    type: [String],
    required: [true, "Please enter a hero name"],
  },
  releaseDate: {
    type: Date,
    required: true
  },
  pages: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Comic", ComicSchema)