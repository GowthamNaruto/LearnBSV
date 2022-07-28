const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
// const User = require('./userModel');

const courseCardSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      reruired: [true, 'A Course must have a name'],
      unique: true,
      trim: true,
      maxlength: [80, 'A course must have less then or equal to 40 character'],
      minlength: [10, 'A course must have more then or equal to 10 character'],
      // validate: [validator.isAlpha, 'Tour name must only contains characters'],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A course must have a duration'],
    },
    difficulty: {
      type: String,
      required: [true, 'A course must have a difficulty'],
      enum: {
        values: ['beginner', 'intermediate', 'master'],
        message: 'Level is either: beginner, intermediate, master',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    // rating: {
    //   type: Number,
    //   default: 0,
    //   min: [1, 'Rating must be above 1.0'],
    //   max: [5, 'Rating must be below 5.0'],
    // },
    price: {
      type: Number,
      required: [true, 'A course must have a price'],
    },
    courseNumber: {
      type: Number,
      required: [true, 'A course must have a number'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        // this only points to current doc on NEW document creation
        validator: function (val) {
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price',
      },
    },
    contentId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Content',
    },
    summary: {
      type: String,
      trim: true,
    },
    lessonId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Lesson',
    },
    description: {
      type: String,
      trim: true,
    },
    language: {
      type: String,
      maxlength: [10, 'A course must have less then or equal to 40 character'],
      minlength: [4, 'A course must have more then or equal to 10 character'],
      // validate: [validator.isAlpha, 'Tour name must only contains characters'],
    },
    imageCover: {
      type: String,
      // required: [true, 'A tour must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    lessons: [
      {
        type: {
          type: String,
        },
        chapter: String,
      },
    ],
    url: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// tourSchema.index({ price: 1 });
courseCardSchema.index({ price: 1, ratingsAverage: -1 });
courseCardSchema.index({ slug: 1 });

// Virtual populate
courseCardSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
courseCardSchema.pre('save', function (next) {
  this.slug = slugify(this.courseName, { lower: true });
  next();
});

// courseCardSchema.pre('save', async function (next) {
//   const guidesPromises = this.guides.map(async (id) => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

// QUERRY MIDDLEWARE
courseCardSchema.pre(/^find/, function (next) {
  this.find({ secretCourse: { $ne: true } });
  this.start = Date.now();
  next();
});

// tourSchema.post(/^find/, function (docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds`);
//   next();
// });

// AGGREDATION MIDDLEWARE
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
//   console.log(this.pipeline());
//   next();
// });

// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next();
// });

const Card = mongoose.model('Course', courseCardSchema);

module.exports = Card;
