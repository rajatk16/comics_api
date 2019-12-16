const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please give your hero a name"],
  },
  intelligence: {
    type: Number,
    required: [true, "Please enter the hero intelligence"]
  },
  strength: {
    type: Number,
    required: [true, "Please enter the hero strength"]
  },
  speed: {
    type: Number,
    required: [true, "Please enter the hero speed"]
  },
  durability: {
    type: Number,
    required: [true, "Please enter the hero durability"]
  },
  power: {
    type: Number,
    required: [true, "Please enter the hero power"]
  },
  combat: {
    type: Number,
    required: [true, "Please enter the hero combat"]
  },
  alterEgo: {
    type: String,
    default: "None"
  },
  aliases: {
    type: [String],
    default: ["None"]
  },
  placeOfBirth: {
    type: String
  },
  base: {
    type: [String]
  },
  firstAppearance: {
    type: String,
    required: [true, "Enter the first appearance Comic Book of the hero"]
  },
  publisher: {
    type: String,
  },
  type: {
    type: String,
    required: [true, "Please enter a character type"],
    enum: ['Hero', 'Villain', 'Anti-Hero', 'Other']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  race: {
    type: String,
  },
  height: {
    type: String,
  },
  weight: {
    type: String
  },
  eyeColor: {
    type: String
  },
  hairColor: {
    type: String
  },
  occupation: {
    type: String
  },
  groups: {
    type: [String]
  },
  relatives: {
    type: [String]
  },
  imageUrl: {
    type: String
  },
  bio: {
    type: String
  },
  caption: {
    type: String
  }
})

module.exports = mongoose.model('Hero', HeroSchema);