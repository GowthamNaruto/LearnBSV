const crypto = require('crypto');
const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'PLease tell us your name'],
    unique: true,
    trim: true,
    minlength: [3, 'A Name must have more then or equal to 3 character'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
    trim: true,
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'A password should be greater than 8 character '],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // THis only works on CREATE or SAVE
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords do not match!',
    },
  },
  progress1: {
    type: Number,
    default: 0,
  },
  progress2: {
    type: Number,
    default: 0,
  },
  progress3: {
    type: Number,
    default: 0,
  },
  progress4: {
    type: Number,
    default: 0,
  },
  progress5: {
    type: Number,
    default: 0,
  },
  progress6: {
    type: Number,
    default: 0,
  },
  progress7: {
    type: Number,
    default: 0,
  },
  progress8: {
    type: Number,
    default: 0,
  },
  progress9: {
    type: Number,
    default: 0,
  },
  progress10: {
    type: Number,
    default: 0,
  },
  progress11: {
    type: Number,
    default: 0,
  },
  progress12: {
    type: Number,
    default: 0,
  },
  progress13: {
    type: Number,
    default: 0,
  },
  progress14: {
    type: Number,
    default: 0,
  },
  progress15: {
    type: Number,
    default: 0,
  },
  progress16: {
    type: Number,
    default: 0,
  },
  progress17: {
    type: Number,
    default: 0,
  },
  progress18: {
    type: Number,
    default: 0,
  },
  progress19: {
    type: Number,
    default: 0,
  },
  progress20: {
    type: Number,
    default: 0,
  },
  progress21: {
    type: Number,
    default: 0,
  },
  courseComplete: {
    type: String,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  //  Hash the password with cost 12
  this.password = await bcrypt.hash(this.password, 12);

  //  Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  // if we have not modified property or if the document is new, then do not manipulate the passeordChsangedAt
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = (this.passwordChangedAt.getTime() / 1000, 10);

    return JWTTimestamp < changedTimestamp;
  }
  //  False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
