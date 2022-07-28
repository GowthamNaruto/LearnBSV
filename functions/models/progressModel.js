const mongoose = require('mongoose');
const Tour = require('./tourModel');

const progressSchema = new mongoose.Schema(
  {
    progress: [Number],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    lesson: {
      type: mongoose.Schema.ObjectId,
      ref: 'Lesson',
      // required: [true, 'Review must belong to a tour.'],
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: 'Course',
      // required: [true, 'Review must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Progress must belong to an user.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

progressSchema.index({ lesson: 1, user: 1 }, { unique: true });

// QUERRY MIDDLEWARE
progressSchema.pre(/^find/, function (next) {
  // this.populate({
  //   path: 'tour',
  //   select: 'name',
  // }).populate({
  //   path: 'user',
  //   select: 'name photo',
  // });
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

// progressSchema.statics.calcAverageRatings = async function (tourId) {
//   const stats = await this.aggregate([
//     {
//       $match: { tour: tourId },
//     },
//     {
//       $group: {
//         _id: '$tour',
//         nRatings: { $sum: 1 },
//         avgRating: { $avg: '$rating' },
//       },
//     },
//   ]);

//   if (stats.length > 0) {
//     await Tour.findByIdAndUpdate(tourId, {
//       ratingsQuantity: stats[0].nRating,
//       ratingsAverage: stats[0].avgRating,
//     });
//   } else {
//     await Tour.findByIdAndUpdate(tourId, {
//       ratingsQuantity: 0,
//       ratingsAverage: 4.5,
//     });
//   }
// };

// progressSchema.post('save', function () {
//   // this points to current review
//   this.constructor.calcAverageRatings(this.tour);
// });

// progressSchema.pre(/^findOneAnd/, async function (next) {
//   this.r = await this.findOne();
//   next();
// });

// progressSchema.post(/^findOneAnd/, async function () {
//   // await this.findOne(); does NOT work here, query has already excuted
//   await this.r.constructor.calcAverageRatings(this.r);
// });

const Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;
