const express = require('express');
const tableOfContentController = require('./../controllers/tableOfContentController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router.route('/').get(tableOfContentController.getAllTableOfContents).post(
  tableOfContentController.createTableOfContents
  // authController.restrictTo('user'),
  // tableOfContentController.setTourUserIds,
);

router
  .route('/:id')
  .get(tableOfContentController.getTableOfContents)
  .patch(
    authController.restrictTo('user', 'admin'),
    tableOfContentController.updateTableOfContents
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    tableOfContentController.deleteTableOfContents
  );

module.exports = router;
