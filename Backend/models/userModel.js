const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: {type: String, required: false}
});

// encrypting password
userSchema.pre('save', async function(next) {
  // hash password and replace
  try {
    this.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR)
    return next();
  } catch (err) {
    console.log('Error encrypting password');
    return next(err);
  }
});


module.exports = mongoose.model('User', userSchema);
/**
 * userSchema.pre('save', async function(next) {
 * 
 * this.password = await bcrypt.hash
 *  
 * })
 */