const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
// const User = require('./userModel');

const lessonSchema = new mongoose.Schema(
  {
    lessonName: {
      type: String,
      reruired: [true, 'A Course must have a name'],
      unique: true,
      trim: true,
      maxlength: [80, 'A course must have less then or equal to 80 character'],
      minlength: [10, 'A course must have more then or equal to 10 character'],
      // validate: [validator.isAlpha, 'Tour name must only contains characters'],
    },
    nextLessonName: {
      type: String,
      reruired: [true, 'A Course must have a name'],
      unique: true,
      trim: true,
      maxlength: [80, 'A course must have less then or equal to 80 character'],
      minlength: [10, 'A course must have more then or equal to 10 character'],
      // validate: [validator.isAlpha, 'Tour name must only contains characters'],
    },
    courseNumber: {
      type: Number,
      required: [true, 'A course must have a number'],
    },
    slug: String,
    // slugNext: String,
    lesson: [
      {
        primaryHeading: String,
        primaryDescription: String,
        primaryVideoDescription: String,
        primaryVideo: String,
        primaryImage: String,
        primaryImageDescription: String,
        secondaryHeading: String,
        secondaryDescription: String,
        secondaryImage: String,
        secondaryImageDescription: String,
        secondaryVideoDescription: String,
        secondaryVideo: String,
        tertiaryHeading: String,
        tertiaryDescription: String,
        tertiaryImage: String,
        tertiaryImageDescription: String,
        tertiaryVideoDescription: String,
        tertiaryVideo: String,
        quaternaryHeading: String,
        quaternaryDescription: String,
        quaternaryImage: String,
        quaternaryImageDescription: String,
        quaternaryVideoDescription: String,
        quaternaryVideo: String,
        quinaryHeading: String,
        quinaryDescription: String,
        quinaryImage: String,
        quinaryImageDescription: String,
        quinaryVideoDescription: String,
        quinaryVideo: String,
        senaryHeading: String,
        senaryDescription: String,
        senaryImage: String,
        senaryImageDescription: String,
        senaryVideoDescription: String,
        senaryVideo: String,
        septanaryHeading: String,
        septanaryDescription: String,
        septanaryImage: String,
        septanaryImageDescription: String,
        septanaryVideoDescription: String,
        septanaryVideo: String,
      },
    ],
    courseContent: [
      {
        chapterName: {
          name: String,
          lesson: [
            {
              lessonName: String,
              lessonSlug: String,
            },
          ],
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// tourSchema.index({ price: 1 });
lessonSchema.index({ slug: 1 });

// Virtual populate
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
lessonSchema.pre('save', function (next) {
  this.slug = slugify(this.lessonName, { lower: true });
  next();
});

lessonSchema.virtual('progresses', {
  ref: 'Progress',
  foreignField: 'lesson',
  localField: '_id',
});
8;

// QUERRY MIDDLEWARE
lessonSchema.pre(/^find/, function (next) {
  this.find({ secretCourse: { $ne: true } });
  this.start = Date.now();
  next();
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
