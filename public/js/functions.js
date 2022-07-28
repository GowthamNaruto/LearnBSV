// /* eslint-disable */
// import axios from 'axios';
// import { showAlert } from './alert';

// export const storeIt = async (score) => {
//   try {
//     const res = await axios({
//       method: 'PATCH',
//       url: 'http://127.0.0.1:3000/api/v1/users/updateMe',
//       data: {
//         courseComplete: req.params.courseName,
//       },
//     });

//     if (res.data.status === 'success') {
//       showAlert('success', 'Logged in successfully!');
//       // window.setTimeout(() => {
//       //   location.assign('/');
//       // }, 1500);
//     }
//   } catch (err) {
//     showAlert('error', err.response.data.message);
//   }
// };
