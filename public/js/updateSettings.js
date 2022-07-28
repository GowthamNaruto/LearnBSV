import axios from 'axios';
import { showAlert } from './alert';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url: url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert(
        'success',
        `${type.toUpperCase()} updated successfully! Please refresh the page to reflect your updated settings.`
      );
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
