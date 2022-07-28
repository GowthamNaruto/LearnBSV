// import { showAlert } from './alert';
// import axios from 'axios';

// const stripe = Stripe(
//   'pk_test_51Kw1qiSAvdqBycU32HL5mjFKCZ9ByQBsHSgjOVJNqOIrYgAy4J4fYtWDRPPC1u1z28o9hHfiV7FXq9ubeOzPmwlQ00BWL6u6jl'
// );

// export const bookTour = async (tourId) => {
//   try {
//     // 1) Get checkout session from API
//     const session = await axios(`api/v1/bookings/checkout-session/${tourId}`);

//     // 2) Create checkout form + charge credid card
//     await stripe.redirectToCheckout({
//       sessionId: session.data.session.id,
//     });
//   } catch (err) {
//     console.log(err);
//     showAlert('error', err);
//   }
// };
