const mongoose = require('mongoose');
// const Tour = require('./tourModel');
const crypto = require('crypto');
const slugify = require('slugify');

// const bcrypt = require('bcryptjs/dist/bcrypt');

const certificateSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, 'Review cannot be empty'],
    },
    userName: {
      type: String,
      required: [true, 'Review cannot be empty'],
      unique: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    marksScored: {
      type: Number,
      default: 21,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      // required: [true, 'Review must belong to a tour.'],
    },
    slug: String,
    credentialId: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// certificateSchema.index({ course: 1, user: 1 }, { unique: true });

// QUERRY MIDDLEWARE
certificateSchema.pre(/^find/, function (next) {
  this.populate('user').populate({
    path: 'user',
    select: 'name',
  });
  next();
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
certificateSchema.pre('save', function (next) {
  this.slug = slugify(this.courseName, { lower: true });
  next();
});

certificateSchema.pre('save', function (next) {
  //  Hash the userName with cost 12
  const credentialIdHex = crypto.randomBytes(16).toString('hex');

  this.credentialId = crypto
    .createHash('sha256')
    .update(credentialIdHex)
    .digest('hex');

  // this.credentialId = await credentialIdHex;
  next();
});

const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate;
