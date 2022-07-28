const express = require('express');
const viewsController = require('./../controllers/viewsController');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
// const bookingController = require('./../controllers/bookingController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', authController.isLoggedIn, viewsController.getOverview);
// router.get('/content', viewsController.getContent);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get(
  '/course/:slug',
  authController.isLoggedIn,
  viewsController.getCourse
);

// router.get(
//   '/myCertificate',
//   authController.protect,
//   viewsController.getMyCertificate
// );
router.get('/My-Courses', authController.protect, viewsController.getMyCourses);

router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', viewsController.getSigninForm);
router.get('/forgetPasswordForm', viewsController.getForgetPasswordForm);
router.get('/resetPasswordForm', viewsController.getResetPasswordForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.get('/content/:slug', viewsController.getContent);
router.get(
  '/assessment/:slug',
  authController.protect,
  viewsController.getAssessment
);
router.get(
  '/my-certificate',
  authController.protect,
  viewsController.getCertificate
);

router.get(
  '/student/certificate',
  authController.protect,
  viewsController.getCertificate
);
router.get(
  '/my-certificates',
  authController.protect,
  viewsController.getMyCertificates
);
router.get('/lesson/:slug', authController.protect, viewsController.getLesson);
router.get(
  '/lesson/:id',
  authController.protect,
  viewsController.getLessonById
);
router.route('/logout').get(authController.logout);

// router.get('/my-tours', viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);
router.route('/course1/:id').patch(userController.updateProgressOne);

module.exports = router;
