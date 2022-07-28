const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
// const User = require('./userModel');

const courseSchema = new mongoose.Schema(
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
    slug: String,
    courseContent: [
      {
        chapterName: {
          name: String,
          lesson: [
            {
              lessonName: String,
            },
          ],
        },
      },
    ],
    lesson: {
      type: mongoose.Schema.ObjectId,
      ref: 'Lesson',
      // required: [true, 'Review must belong to a tour.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// QUERRY MIDDLEWARE
courseSchema.index({ card: 1, lesson: 1 }, { unique: true });

// Virtual populate
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
courseSchema.pre('save', function (next) {
  this.slug = slugify(this.courseName, { lower: true });
  next();
});

// QUERRY MIDDLEWARE
courseSchema.pre(/^find/, function (next) {
  // this.populate({
  //   path: 'tour',
  //   select: 'name',
  // }).populate({
  //   path: 'user',
  //   select: 'name photo',
  // });
  this.populate({
    path: 'lesson',
    select: 'lessonName',
  });
  next();
});

const Content = mongoose.model('Content', courseSchema);

module.exports = Content;
