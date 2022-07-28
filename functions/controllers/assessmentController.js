const res = require('express/lib/response');
const multer = require('multer');
const Assessment = require('../models/assessmentModel');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');
// const APIFeatures = require('./../utils/apiFeatures');
// const AppError = require('./../utils/appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! PLease upload only images', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadAssessmentImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 },
]);

exports.getAllAssessments = factory.getAll(Assessment);
exports.getAssessment = factory.getOne(Assessment);
exports.createAssessment = factory.createOne(Assessment);
exports.updateAssessment = factory.updateOne(Assessment);
exports.deleteAssessment = factory.deleteOne(Assessment);

// exports.deleteTour = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findByIdAndDelete(req.params.id);

//   if (!tour) {
//     return next(new AppError('No tour found with that ID', 404));
//   }

//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// });
