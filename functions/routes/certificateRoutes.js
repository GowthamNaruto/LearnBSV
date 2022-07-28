const express = require('express');
const certificateController = require('./../controllers/certificateController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router.route('/').get(certificateController.getAllCertificate).post(
  // authController.restrictTo('user'),
  certificateController.createCertificate
);

router
  .route('/:id')
  .get(certificateController.getCertificate)
  .patch(
    authController.restrictTo('user', 'admin'),
    certificateController.updateCertificate
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    certificateController.deleteCertificate
  );

module.exports = router;
