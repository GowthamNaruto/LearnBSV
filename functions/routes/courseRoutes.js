const express = require('express');
const courseController = require('./../controllers/courseController');
const router = express.Router();
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');
const viewsController = require('./../controllers/viewsController');

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
  .get(courseController.getAllContents)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.createContent
  );

router
  .route('/:id')
  .get(courseController.getContent)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.uploadContentImages,
    courseController.resizeContentImages,
    courseController.updateContent
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    courseController.deleteContent
  );

module.exports = router;
