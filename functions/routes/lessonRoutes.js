const express = require('express');

const router = express.Router();
const authController = require('./../controllers/authController');
const lessonController = require('./../controllers/lessonController');

router.route('/').get(lessonController.getAllLessons).post(
  authController.protect,
  // authController.restrictTo('admin'),
  lessonController.createLesson
);

router.route('/:id').get(lessonController.getLesson).patch(
  authController.protect,
  // authController.restrictTo('admin'),
  // lessonController.uploadLessonImages,
  // lessonController.resizeLessonImages,
  lessonController.updateLesson
);

module.exports = router;
