const express = require('express');
const assessmentController = require('./../controllers/assessmentController');
const router = express.Router();
const authController = require('./../controllers/authController');

// router.param('id', tourController.checkID);

// Create a checkbody middleware
// check if body contains the name and price property
// If not, send back 400 (bad request)
// Add it to the post handler stack

// router
//   .route('/:tourId/reviews')
//   .post(
//     authController.protect,
//     authController.restrictTo('user'),
//     reviewController.createReviews
//   );

router
  .route('/')
  .get(assessmentController.getAllAssessments)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    assessmentController.createAssessment
  );

router
  .route('/:id')
  .get(assessmentController.getAssessment)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    assessmentController.updateAssessment
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    assessmentController.deleteAssessment
  );

module.exports = router;
