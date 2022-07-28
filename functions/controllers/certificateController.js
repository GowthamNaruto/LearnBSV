const Certificate = require('./../models/certificateModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.getAllCertificate = factory.getAll(Certificate);
exports.getCertificate = factory.getOne(Certificate);
exports.createCertificate = factory.createOne(Certificate);
exports.updateCertificate = factory.updateOne(Certificate);
exports.deleteCertificate = factory.deleteOne(Certificate);
