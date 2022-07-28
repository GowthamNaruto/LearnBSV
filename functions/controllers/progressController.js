const Progress = require('../models/progressModel');
const User = require('./../models/userModel');
const Lesson = require('./../models/lessonModel');
const factory = require('./handlerFactory');
// const showAlert = require('../public/js/alert');
// const catchAsync = require('./../utils/catchAsync');

exports.setLessonUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.lesson) req.body.lesson = req.params.lessonId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createSaveProgress = async (lessonId) => {
  // const lesson = await Lesson.findById(req.params.lessonId);
  const user = (await User.findOne({ email: req.user.email })).id;
  const progress = 1;
  await Progress.create({ lessonId, user, progress });
  alert('success');
  // showAlert('success', 'You have enrolled to this course');
};

exports.getAllProgress = factory.getAll(Progress);
exports.getProgress = factory.getOne(Progress);
exports.createProgress = factory.createOne(Progress);
exports.updateProgress = factory.updateOne(Progress);
exports.deleteProgress = factory.deleteOne(Progress);
