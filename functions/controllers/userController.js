const res = require('express/lib/response');
const sharp = require('sharp');
const multer = require('multer');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const Card = require('./../models/courseCardModel');

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });
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

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if the user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updatePassword.',
        400
      )
    );
  }

  //  2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
  if (req.file) filteredBody.photo = req.file.filename;

  // 3) Update user document
  const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      user: updateUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'seccess',
    data: null,
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined! PLease use /signup instead.',
  });
};

exports.updateProgressOne = () =>
  catchAsync(async (req, res, next) => {
    const courses = await Card.find();
    const bodyData = {
      progress1: +1,
    };
    const doc = await User.findByIdAndUpdate(req.params.id, bodyData, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res
      .status(200)
      .json({
        status: 'success',
        data: {
          data: doc,
        },
      })
      .render('overview', {
        title: 'All Courses',
        courses,
      });
  });

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
// Do NOT update password with this
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
// exports.updateProgress1 = factory.updateProgress1(User);
// exports.updateProgress2 = factory.updateProgress2(User);
// exports.updateProgress3 = factory.updateProgress3(User);
// exports.updateProgress4 = factory.updateProgress4(User);
// exports.updateProgress5 = factory.updateProgress5(User);
// exports.updateProgress6 = factory.updateProgress6(User);
// exports.updateProgress7 = factory.updateProgress7(User);
// exports.updateProgress8 = factory.updateProgress8(User);
// exports.updateProgress9 = factory.updateProgress9(User);
// exports.updateProgress10 = factory.updateProgress10(User);
// exports.updateProgress11 = factory.updateProgress11(User);
// exports.updateProgress12 = factory.updateProgress12(User);
// exports.updateProgress13 = factory.updateProgress13(User);
// exports.updateProgress14 = factory.updateProgress14(User);
// exports.updateProgress15 = factory.updateProgress15(User);
// exports.updateProgress16 = factory.updateProgress16(User);
// exports.updateProgress17 = factory.updateProgress17(User);
// exports.updateProgress18 = factory.updateProgress18(User);
// exports.updateProgress19 = factory.updateProgress19(User);
// exports.updateProgress20 = factory.updateProgress20(User);
// exports.updateProgress21 = factory.updateProgress21(User);
