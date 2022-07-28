const express = require('express');
const progressController = require('./../controllers/progressController');
const authController = require('./../controllers/authController');
const { Router } = require('express');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router.route('/').get(progressController.getAllProgress).post(
  // authController.restrictTo('user'),
  progressController.setLessonUserIds,
  progressController.createProgress
);

router
  .route('/save-progress/:lessonId')
  .post(progressController.createSaveProgress);

router
  .route('/:id')
  .get(progressController.getProgress)
  .patch(
    authController.restrictTo('user', 'admin'),
    progressController.updateProgress
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    progressController.deleteProgress
  );

module.exports = router;
