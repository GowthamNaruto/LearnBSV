/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
// const Progress = require('./../../models/progressModel');

// export const saveProgress = async (lessonId) => {
//   try {
//     // 1) Get checkout session from API
//     await axios(`/api/v1/progress/save-progress/${lessonId}`);
//     alert('lessonId');

//     // const session = await axios(`/api/v1/bookings/save-progress/${tourId}`);
//     // console.log(session);
//     // const session = await axios(`/api/v1/bookings/save-progress/${tourId}`);
//     // console.log(session);
//   } catch (err) {
//     console.log(err);
//     // showAlert('error', err);
//   }
// };

export const enrollCourse = async (userId) => {
  try {
    const str1 = userId.split(',');
    const res = await axios({
      method: 'POST',
      url: '/api/v1/enroll',
      data: {
        user: str1[0],
        courseName: str1[1],
        course: str1[2],
        price: str1[3],
      },
    });
    // alert(userId);

    if (res.data.status === 'success') {
      showAlert('success', 'enrolled successfully!');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[1]}`);
      }, 2500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
// export const saveProgress = async (lessonId) => {
//   try {
//     const res = await axios({
//       method: 'POST',
//       url: 'http://127.0.0.1:3000/api/v1/progress',
//       data: {
//         progress: 1,
//         lesson: lessonId,
//         user: 1596,
//       },
//     });
//     alert('success');

//     if (res.data.status === 'success') {
//       showAlert('success', 'enrolled successfully!');
//       window.setTimeout(() => {
//         location.assign('/');
//       }, 1500);
//     }
//   } catch (err) {
//     showAlert('error', err.response.data.message);
//   }
// };
