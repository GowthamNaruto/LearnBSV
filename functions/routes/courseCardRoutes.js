const express = require('express');
const courseCardController = require('./../controllers/courseCardController');
const router = express.Router();
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

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
  .get(courseCardController.getAllCourses)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    courseCardController.createCourse
  );

router
  .route('/:id')
  .get(courseCardController.getCourse)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    courseCardController.uploadCourseImages,
    courseCardController.resizeCourseImages,
    courseCardController.updateCourse
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    courseCardController.deleteCourse
  );

module.exports = router;
