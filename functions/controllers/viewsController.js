const Tour = require('../models/tourModel');
const Card = require('../models/courseCardModel');
const Enroll = require('./../models/enrollModel');
const Content = require('../models/courseModel');
const Lesson = require('../models/lessonModel');
const Assessment = require('../models/assessmentModel');
const Certificate = require('../models/certificateModel');
const User = require('../models/userModel');
const Bookings = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === 'booking')
    res.locals.alert =
      "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here immediatly, please come back later.";
  next();
};

// exports.getOverview = catchAsync(async (req, res) => {
//   // 1) Get tour data from collection
//   const tours = await Tour.find();
//   // 2) Build template
//   // 3) Render that template useing tour data from 1)

//   res.status(200).render('overview', {
//     title: 'All Tours',
//     tours,
//   });
// });
exports.getOverview = catchAsync(async (req, res) => {
  // 1) Get tour data from collection
  const courses = await Card.find();
  // 2) Build template
  // 3) Render that template useing tour data from 1)

  res.status(200).render('overview', {
    title: 'All Courses',
    courses,
  });
});

exports.getMyCourses = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const enrolls = await Enroll.find({ user: req.user.id });

  // 2) Find tours with the returned IDs
  const courseIDs = enrolls.map((el) => el.course);
  const courses = await Card.find({ _id: { $in: courseIDs } });

  res.status(200).render('overview', {
    title: 'My Courses',
    courses,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404));
  }
  // 2) Build the template
  // 3) Render template using data from 1
  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});
exports.getCertificate = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested certificate
  const certificate = await Certificate.findOne({ userId: req.user.id });

  // 2) Build the template
  // 3) Render template using data from 1
  res.status(200).render('certificateOne', {
    title: `Certificate`,
    certificate,
  });
});

exports.getCourse = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const course = await Card.findOne({ slug: req.params.slug });

  if (!course) {
    return next(new AppError('There is no course with that name', 404));
  }
  // 2) Build the template
  // 3) Render template using data from 1
  res.status(200).render('course', {
    title: `${course.courseName} Course`,
    course,
  });
});
exports.getAssessment = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const assessment = await Assessment.findOne({ slug: req.params.slug });

  if (!assessment) {
    return next(new AppError('There is no content with that name', 404));
  }
  // 2) Build the template
  // 3) Render template using data from 1
  res.status(200).render('assessment', {
    title: `${assessment.courseName} Course`,
    assessment,
  });
});
exports.getContent = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const content = await Content.findOne({ slug: req.params.slug });

  if (!content) {
    return next(new AppError('There is no content with that name', 404));
  }
  // 2) Build the template
  // 3) Render template using data from 1
  res.status(200).render('content', {
    title: `${content.courseName} Course`,
    content,
  });
});
// exports.getOne = (Model, popOptions) =>
//   catchAsync(async (req, res, next) => {
//     let query = Model.findById(req.params.id);
//     if (popOptions) query = query.populate(popOptions);
//     const doc = await query;

//     if (!doc) {
//       return next(new AppError('No document found with that ID', 404));
//     }

//     res.status(200).json({
//       status: 'success',
//       data: {
//         data: doc,
//       },
//     });
// });
exports.getLessonById = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested lesson (including chapter and content)
  const lesson = await Lesson.findById(req.params.id);

  if (!lesson) {
    return next(new AppError('There is no lesson with that name', 404));
  }
  // 2) Build the template
  // 3) Render template using data from 1
  res.status(200).render('lesson', {
    title: `${lesson.lessonName}`,
    lesson,
  });
});
exports.getLesson = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested lesson (including chapter and content)
  const lesson = await Lesson.findOne({ slug: req.params.slug }).populate({
    path: 'progresses',
    fields: 'progress user name',
  });
  const lessonNext = await Lesson.findOne({
    slug: req.params.nextLessonName,
  });

  if (!lesson && !lessonNext) {
    return next(new AppError('There is no lesson with that name', 404));
  }
  // 2) Build the template
  // 3) Render template using data from 1
  res.status(200).render('lesson', {
    title: `${lesson.lessonName}`,
    lesson,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};
exports.getSigninForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Create a new account',
  });
};
exports.getForgetPasswordForm = (req, res) => {
  res.status(200).render('forgetPasswordForm', {
    title: 'Forget Password',
  });
};
exports.getResetPasswordForm = (req, res) => {
  res.status(200).render('resetPasswordForm', {
    title: 'Reset Password',
  });
};
exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
};
// exports.getCertificate = (req, res) => {
//   res.status(200).render('certificate', {
//     title: 'Certificate',
//   });
// };

// exports.getMyCertificate = (req, res) => {
//   res.status(200).render('myCertificate', {
//     title: 'Certificates',
//   });
// };

// exports.getMyCourses = (req, res) => {
//   res.status(200).render('myCourses', {
//     title: 'Courses',
//   });
// };
// exports.getLesson = (req, res) => {
//   res.status(200).render('lesson', {
//     title: 'Your account',
//   });
// };
exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Bookings.find({ user: req.user.id });

  // 2) Find tours with the returned IDs
  const tourIDs = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours,
  });
});

exports.getMyCertificates = catchAsync(async (req, res) => {
  // 1) Find all bookings
  // const certificates = await Certificate.find({ userId: req.user.id });
  const certificates = await Certificate.find({ userId: req.user.id });

  // 2) Find tours with the returned IDs
  // const courseIDs = certificates.map((el) => el.courseName);
  // const certificate = await Certificate.find({
  //   courseName: { $in: courseIDs },
  // });

  res.status(200).render('myCertificate', {
    title: 'My certificates',
    certificates,
  });
});
exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser,
  });
});
