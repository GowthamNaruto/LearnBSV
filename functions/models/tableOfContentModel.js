const mongoose = require('mongoose');
const Lesson = require('./../models/lessonModel');

const tableOfContentSchema = new mongoose.Schema(
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
    courseId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
      // required: [true, 'Review must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      // required: [true, 'Review must belong to an user.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// QUERRY MIDDLEWARE
// courseSchema.index({ card: 1, lesson: 1 }, { unique: true });

// Virtual populate
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tableOfContentSchema.pre('save', function (next) {
  this.slug = slugify(this.courseName, { lower: true });
  next();
});

// QUERRY MIDDLEWARE
tableOfContentSchema.pre(/^find/, function (next) {
  // this.populate({
  //   path: 'tour',
  //   select: 'name',
  // }).populate({
  //   path: 'user',
  //   select: 'name photo',
  // });
  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});

const TableOfContents = mongoose.model('TableOfContents', tableOfContentSchema);

module.exports = TableOfContents;
