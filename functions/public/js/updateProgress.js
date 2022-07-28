import axios from 'axios';
import { showAlert } from './alert';

// type is either 'password' or 'data'
export const updateProgress1 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress1: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress2 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress2: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress3 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress3: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress4 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress4: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress5 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress5: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress6 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress6: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress7 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress7: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress8 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress8: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress9 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress9: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress10 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress10: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress11 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress11: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress12 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress12: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress13 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress13: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress14 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress14: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress15 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress15: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress16 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress16: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress17 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress17: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress18 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress18: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress19 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress19: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const updateProgress20 = async (userId, progress) => {
  try {
    const str1 = userId.split(',');
    const url = `/api/v1/users/${str1[0]}`;
    const res = await axios({
      method: 'PATCH',
      url: url,
      data: {
        progress20: str1[1],
      },
    });
    // alert(str1[1]);

    if (res.data.status === 'success') {
      showAlert('success', 'Loading...');
      window.setTimeout(() => {
        location.assign(`/lesson/${str1[2]}`);
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
