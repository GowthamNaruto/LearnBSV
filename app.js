const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
// const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const courseCardRouter = require('./routes/courseCardRoutes');
const courseRouter = require('./routes/courseRoutes');
const lessonRouter = require('./routes/lessonRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const certificateRouter = require('./routes/certificateRoutes');
const assessmentRouter = require('./routes/assessmentRoutes');
const tableOfContentRouter = require('./routes/tableOfContentRoutes');
const progressRouter = require('./routes/progressRoutes');
const enrollRouter = require('./routes/enrollRoutes');

// const enrollRouter = require('./routes/bookingRoutes');
// const bookingRouter = require('./routes/bookingRoutes');
// const bookingController = require('./controllers/bookingController');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.enable('trust proxy');

// telling the express what template engine we gonna use
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1)  GLOBAL MIDDLEWARES
// Implement CORS
// app.use(cors());
// Servijng static files
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP heders
app.use(helmet());

// Develpment logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Stripe webhook, BEFORE body-parser, because stripe needs the body as stream
// app.post(
//   '/webhook-checkout',
//   express.raw({ type: 'application/json' }),
//   bookingController.webhookCheckout
// );

//  Boy parser, reading data from body into req.body
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitaization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

app.use(compression());

// Servijng static files
// app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) ROUTES
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/course', courseCardRouter);
app.use('/api/v1/content', courseRouter);
app.use('/api/v1/assessment', assessmentRouter);
app.use('/api/v1/lesson', lessonRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/certificate', certificateRouter);
// app.use('/api/v1/bookings', bookingRouter);
app.use('/api/v1/tableOfContent', tableOfContentRouter);
app.use('/api/v1/progress', progressRouter);
app.use('/api/v1/enroll', enrollRouter);
// app.use('/api/v1/enrolls', enrollRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
