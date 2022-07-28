const TableOfContents = require('./../models/tableOfContentModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

// exports.setTourUserIds = (req, res, next) => {
//   // Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId;
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

exports.getAllTableOfContents = factory.getAll(TableOfContents);
exports.getTableOfContents = factory.getOne(TableOfContents);
exports.createTableOfContents = factory.createOne(TableOfContents);
exports.updateTableOfContents = factory.updateOne(TableOfContents);
exports.deleteTableOfContents = factory.deleteOne(TableOfContents);
