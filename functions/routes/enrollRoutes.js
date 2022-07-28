const express = require('express');
const enrollController = require('../controllers/enrollController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

// router.get('/checkout-session/:tourId', bookingController.getCheckoutSession);

// router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(enrollController.getAllEnroll)
  .post(enrollController.createEnroll);

router
  .route('/:id')
  .get(enrollController.getEnroll)
  .patch(enrollController.updateEnroll)
  .delete(enrollController.deleteEnroll);

module.exports = router;
