const mongoose = require('mongoose');
const slugify = require('slugify');

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
    type: [mongoose.Schema.Types.String],
    required: [true, "Please enter a hero name"],
    ref: 'Hero'
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

ComicSchema.pre('save', function (next) {
  this.slug = slugify(this.name, {
    lower: true
  });
  next();
})

module.exports = mongoose.model("Comic", ComicSchema)