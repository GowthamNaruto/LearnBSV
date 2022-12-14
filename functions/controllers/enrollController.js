// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const Card = require('../models/courseCardModel');
// const User = require('../models/userModel');
const Enroll = require('../models/enrollModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// exports.getCheckoutSession = catchAsync(async (req, res, next) => {
//   // 1) Get the currently booked tour
//   const course = await Card.findById(req.params.courseId);
//   // console.log(tour);

//   // 2) Create checkout session
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     // success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${
//     //   req.params.tourId
//     // }&user=${req.user.id}&price=${tour.price}`,
//     success_url: `${req.protocol}://${req.get('host')}/my-tours?alert=booking`,
//     cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
//     customer_email: req.user.email,
//     client_reference_id: req.params.tourId,
//     line_items: [
//       {
//         name: `${tour.name} Tour`,
//         description: tour.summary,
//         images: [
//           `${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`,
//         ],
//         amount: tour.price * 100,
//         currency: 'usd',
//         quantity: 1,
//       },
//     ],
//   });

//   // 3) Create session as response
//   res.status(200).json({
//     status: 'success',
//     session,
//   });
// });

// const createBookingCheckout = async (session) => {
//   const tour = req.params.courseId;
//   const user = (await User.findOne({ email: req.user.email })).id;
//   const price = course.price / 100;
//   await Booking.create({ tour, user, price });
// };

// exports.webhookCheckout = (req, res, next) => {
//   const signature = req.headers['stripe-signature'];

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(
//       req.body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     return res.status(400).send(`Webhook error: ${err.message}`);
//   }

//   if (event.type === 'checkout.session.completed')
//     createBookingCheckout(event.data.object);

//   res.status(200).json({ received: true });
// };

exports.createEnroll = factory.createOne(Enroll);
exports.getEnroll = factory.getOne(Enroll);
exports.getAllEnroll = factory.getAll(Enroll);
exports.updateEnroll = factory.updateOne(Enroll);
exports.deleteEnroll = factory.deleteOne(Enroll);
