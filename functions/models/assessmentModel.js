const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
// const User = require('./userModel');

const assessmentSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      reruired: [true, 'A Course must have a name'],
      unique: true,
      trim: true,
      maxlength: [80, 'A course must have less then or equal to 80 character'],
      minlength: [10, 'A course must have more then or equal to 10 character'],
      // validate: [validator.isAlpha, 'Tour name must only contains characters'],
    },
    lastLessonName: {
      type: String,
      reruired: [true, 'A Course must have a name'],
      unique: true,
      trim: true,
      maxlength: [80, 'A course must have less then or equal to 80 character'],
      minlength: [10, 'A course must have more then or equal to 10 character'],
      // validate: [validator.isAlpha, 'Tour name must only contains characters'],
    },
    slug: String,
    // slugNext: String,
    questions: [
      {
        serial: Number,
        question: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
        correctAnswer: String,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// tourSchema.index({ price: 1 });
assessmentSchema.index({ slug: 1 });

// Virtual populate
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
assessmentSchema.pre('save', function (next) {
  this.slug = slugify(this.lastLessonName, { lower: true });
  next();
});

assessmentSchema.virtual('contents', {
  ref: 'Lesson',
  foreignField: 'assessement',
  localField: '_id',
});

// QUERRY MIDDLEWARE
// lessonSchema.pre(/^find/, function (next) {
//   this.find({ secretCourse: { $ne: true } });
//   this.start = Date.now();
//   next();
// });

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
