const res = require('express/lib/response');
const sharp = require('sharp');
const multer = require('multer');
const Content = require('./../models/courseModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');
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

exports.uploadContentImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 },
]);

exports.resizeContentImages = async (req, res, next) => {
  console.log(req.files);
  if (!req.file.imageCover || !req.files.images) return next();

  // Cover image
  req.body.imageCover = `course-${req.params.id}-${Date.now()}-cover.jpeg`;
  await sharp(req.file.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/tours/${req.body.imageCover}`);

  // 2) Images
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `course-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/tours/${filename}`);

      req.body.images.push(filename);
    })
  );
  next();
};

exports.getAllContents = factory.getAll(Content);
exports.getContent = factory.getOne(Content);
exports.createContent = factory.createOne(Content);
exports.updateContent = factory.updateOne(Content);
exports.deleteContent = factory.deleteOne(Content);

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
