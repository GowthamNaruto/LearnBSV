// const mongoose = require('mongoose');
// const slugify = require('slugify');
// const validator = require('validator');
// // const User = require('./userModel');

// const courseSchema = new mongoose.Schema(
//   {
//     courseName: {
//       type: String,
//       reruired: [true, 'A Course must have a name'],
//       unique: true,
//       trim: true,
//       maxlength: [40, 'A course must have less then or equal to 40 character'],
//       minlength: [10, 'A course must have more then or equal to 10 character'],
//       // validate: [validator.isAlpha, 'Tour name must only contains characters'],
//     },
//     slug: String,
//     courseContent: [
//       {
//         chapterName: {
//           name: String,
//           lesson: [
//             {
//               lessonName: String,
//               primaryHeading: String,
//               primaryDescription: String,
//               primaryvideo: String,
//               primaryImage: String,
//               secondaryHeading: String,
//               secondaryDescription: String,
//               secondaryImage: String,
//               secindaryvideo: String,
//               tertiaryHeading: String,
//               tertiaryDescription: String,
//               tertiaryImage: String,
//               tertiaryvideo: String,
//               quaternaryHeading: String,
//               quaternaryDescription: String,
//               quaternaryImage: String,
//               quaternaryvideo: String,
//               quinaryHeading: String,
//               quinaryDescription: String,
//               quinaryImage: String,
//               quinaryvideo: String,
//             },
//           ],
//         },
//       },
//     ],
//   },
//   {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );

// // tourSchema.index({ price: 1 });
// courseSchema.index({ slug: 1 });

// // Virtual populate
// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// courseSchema.pre('save', function (next) {
//   this.slug = slugify(this.courseName, { lower: true });
//   next();
// });

// // courseCardSchema.pre('save', async function (next) {
// //   const guidesPromises = this.guides.map(async (id) => await User.findById(id));
// //   this.guides = await Promise.all(guidesPromises);
// //   next();
// // });

// // QUERRY MIDDLEWARE
// courseSchema.pre(/^find/, function (next) {
//   this.find({ secretCourse: { $ne: true } });
//   this.start = Date.now();
//   next();
// });

// // tourSchema.post(/^find/, function (docs, next) {
// //   console.log(`Query took ${Date.now() - this.start} milliseconds`);
// //   next();
// // });

// // AGGREDATION MIDDLEWARE
// // tourSchema.pre('aggregate', function (next) {
// //   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
// //   console.log(this.pipeline());
// //   next();
// // });

// // tourSchema.post('save', function (doc, next) {
// //   console.log(doc);
// //   next();
// // });

// const Content = mongoose.model('Content', courseSchema);

// module.exports = Content;
