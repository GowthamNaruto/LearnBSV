import axios from 'axios';
import { showAlert } from './alert';

// type is either 'password' or 'data'
export const createCertificate = async (userId) => {
  try {
    const str1 = userId.split(',');
    const url = '/api/v1/certificate';
    const res = await axios({
      method: 'POST',
      url: url,
      data: {
        courseName: str1[1],
        userName: str1[0],
        userId: str1[2],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign('/my-certificates');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
