const mongoose = require('mongoose');

const enrollSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: [true, 'Booking must belong to a Tour!'],
  },
  courseName: {
    type: String,
    maxlength: [80, 'A course must have less then or equal to 80 character'],
    minlength: [10, 'A course must have more then or equal to 10 character'],
    // validate: [validator.isAlpha, 'Tour name must only contains characters'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Booking must belong to a User!'],
  },
  price: {
    type: Number,
    require: [true, 'Booking must have a price.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

enrollSchema.pre(/^find/, function (next) {
  this.populate('user').populate({
    path: 'course',
    select: 'name',
  });
  next();
});

const Enroll = mongoose.model('Enroll', enrollSchema);

module.exports = Enroll;
