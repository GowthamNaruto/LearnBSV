import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { signup } from './signup';
import { updateSettings } from './updateSettings';
import { updateProgress1 } from './updateProgress';
import { updateProgress2 } from './updateProgress';
import { updateProgress3 } from './updateProgress';
import { updateProgress4 } from './updateProgress';
import { updateProgress5 } from './updateProgress';
import { updateProgress6 } from './updateProgress';
import { updateProgress7 } from './updateProgress';
import { updateProgress8 } from './updateProgress';
import { updateProgress9 } from './updateProgress';
import { updateProgress10 } from './updateProgress';
import { updateProgress11 } from './updateProgress';
import { updateProgress12 } from './updateProgress';
import { updateProgress13 } from './updateProgress';
import { updateProgress14 } from './updateProgress';
import { updateProgress15 } from './updateProgress';
import { updateProgress16 } from './updateProgress';
import { updateProgress17 } from './updateProgress';
import { updateProgress18 } from './updateProgress';
import { updateProgress19 } from './updateProgress';
import { updateProgress20 } from './updateProgress';
import { createCertificate } from './createCertificate';
// import { bookTour } from './enroll';
import { showAlert } from './alert';
import { enrollCourse } from './progress';
import { storeIt } from './functions';
// import axios from 'axios';

// import { returnScore } from  './assessment';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const question = document.querySelectorAll('.question');
const returnScore = document.querySelector('.view-results');
const progressEnroll = document.getElementById('progressEnroll');
const progress1 = document.getElementById('progress1');
const progress2 = document.getElementById('progress2');
const progress3 = document.getElementById('progress3');
const progress4 = document.getElementById('progress4');
const progress5 = document.getElementById('progress5');
const progress6 = document.getElementById('progress6');
const progress7 = document.getElementById('progress7');
const progress8 = document.getElementById('progress8');
const progress9 = document.getElementById('progress9');
const progress10 = document.getElementById('progress10');
const progress11 = document.getElementById('progress11');
const progress12 = document.getElementById('progress12');
const progress13 = document.getElementById('progress13');
const progress14 = document.getElementById('progress14');
const progress15 = document.getElementById('progress15');
const progress16 = document.getElementById('progress16');
const progress17 = document.getElementById('progress17');
const progress18 = document.getElementById('progress18');
const progress19 = document.getElementById('progress19');
const progress20 = document.getElementById('progress20');
// const certificate = document.getElementById('certificate');

// const bookBtn = document.getElementById('book-tour');

// VALUES

// DELEGATIONS

if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}
if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // alert(email);
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name, email, password, passwordConfirm);
  });
}

if (returnScore) {
  returnScore.addEventListener('click', (returnScore) => {
    var answers = [
      'number',
      'buffer',
      'global',
      'buffer',
      'function',
      'function',
      'function',
      'buffer',
      'number',
      'global',
      'number',
      'number',
      'function',
      'number',
      'function',
      'function',
      'number',
      'function',
      'global',
      'function',
      'number',
      'function',
      'number',
      'buffer',
      'function',
      'global',
    ];
    const tot = answers.length;
    function getCheckedValue(radioName) {
      var radios = document.getElementsByName(radioName); // Get radio group by-name
      for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value; // return the checked value
    }
    function getScore() {
      var score = 0;
      for (var i = 0; i < tot; i++)
        if (getCheckedValue('question' + i) === answers[i]) score += 1; // increment only
      return score;
    }
    function returnScore() {
      // document.getElementById('myresults').innerHTML =
      //   'Your score is ' + getScore() + '/' + tot;
      if (getScore() >= 21) {
        document.getElementById('myresults').style.color = 'green';
        document.getElementById('myresults').innerHTML =
          'Your score is ' +
          getScore() +
          '/' +
          tot +
          ',Congratulations! You have passed the final assessment.';
        document.getElementById('viewCertificate').style.display = 'block';
        document
          .getElementById('viewCertificate')
          .addEventListener('click', (e) => {
            e.target.textContent = 'Processing...';
            const { userId } = e.target.dataset;
            // updateProgress(userId, progress);
            createCertificate(userId);
          });
        document.getElementById('certificate').style.display = 'block';

        // storeIt(getScore());
        // var radios = document.getElementsByName(radioName);
        // for (var i = 0; i < tot; i++)
        //   if (radios[i].value === answers[i]) {
        //     document.getElementsByName(radioName).style.color = 'green';
        //   }
        // return the checked value
      } else {
        document.getElementById('myresults').style.color = 'red';
        document.getElementById('myresults').innerHTML =
          'Your score is ' +
          getScore() +
          '/' +
          tot +
          '. It is not sufficient to get your certificate. You must score at least 21 to get your certificate, go through the lessons and try again.';
        window.setTimeout(() => {
          location.assign('/lesson/what-is-bitcoin-and-why-does-it-matter');
        }, 7000);
      }
    }
    returnScore();
    // alert(getScore);
    // e.preventDefault();
    // document.getElementById('myresults').innerHTML =
    //   'Your score is ' + getScore() + '/' + tot;
  });
}

// if (progress) {
//   progress.addEventListener('click', () => {
//     // const userId = req.params.userId;

//     saveProgress();

//     const courseId = req.params.courseId;
//     // const lessonId = req.params.lessonId;
//     alert(courseId);
//   });
// }
// Enroll course
if (progressEnroll)
  progressEnroll.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    enrollCourse(userId);
    // alert(userId);
  });

///////////////////////
// Course Progress
if (progress1)
  progress1.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress1(userId);
    // alert(userId);
  });
if (progress2)
  progress2.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress2(userId);
    // alert(userId);
  });
if (progress3)
  progress3.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress3(userId);
    // alert(userId);
  });
if (progress4)
  progress4.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress4(userId);
    // alert(userId);
  });
if (progress5)
  progress5.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress5(userId);
    // alert(userId);
  });
if (progress6)
  progress6.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress6(userId);
    // alert(userId);
  });
if (progress7)
  progress7.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress7(userId);
    // alert(userId);
  });
if (progress8)
  progress8.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress8(userId);
    // alert(userId);
  });
if (progress9)
  progress9.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress9(userId);
    // alert(userId);
  });
if (progress10)
  progress10.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress10(userId);
    // alert(userId);
  });
if (progress11)
  progress11.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress11(userId);
    // alert(userId);
  });
if (progress12)
  progress12.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress12(userId);
    // alert(userId);
  });
if (progress13)
  progress13.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress13(userId);
    // alert(userId);
  });
if (progress14)
  progress14.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress14(userId);
    // alert(userId);
  });
if (progress15)
  progress15.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress15(userId);
    // alert(userId);
  });
if (progress16)
  progress16.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress16(userId);
    // alert(userId);
  });
if (progress17)
  progress17.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress17(userId);
    // alert(userId);
  });
if (progress18)
  progress18.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress18(userId);
    // alert(userId);
  });
if (progress19)
  progress19.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress19(userId);
    // alert(userId);
  });
if (progress20)
  progress20.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { userId, progress } = e.target.dataset;
    updateProgress20(userId);
    // alert(userId);
  });
// if (certificate)
//   progress.addEventListener('click', (e) => {
//     e.target.textContent = 'Processing...';
//     const { userId, progress } = e.target.dataset;
//     // updateProgress(userId, progress);
//     alert(userId);
//   });
// if (progress)
//   progress.addEventListener('click', (e) => {
//     e.target.textContent = 'Processing...';
//     const { userId } = e.target.dataset;
//     saveProgress(userId);
//     // alert(userId);
//   });

if (userDataForm) {
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    // form.append('photo', document.getElementById('photo').files[0]);
    // console.log(form);

    updateSettings(form, 'data');
  });
}

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

// if (bookBtn)
//   bookBtn.addEventListener('click', (e) => {
//     e.target.textContent = 'Processing...';
//     const { tourId } = e.target.dataset;
//     bookTour(tourId);
//   });

////////////////////////////////////////////////////////////
// Accordian

if (question) {
  question.forEach((question) => {
    question.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const active = document.querySelector('.question.active');
      if (active && active !== question) {
        active.classList.toggle('active');
        active.nextElementSibling.style.maxHeight = 0;
      }
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
}

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 20);
//////////////////////////////////

// ///////////////////////////////
// Multiple choice questions

// var pro = [0];
// button.onclick = function (click) {
//   click.preventDefault();
//   var j = 0;
//   var progress = 0;
//   for (var i = 0; i > 100; i++) if (button) progress += 1; // increment only;
//   pro.push(progress);
//   console.log(pro.size());

//   return progress;
// };

const delay = 5000; //ms

const slides = document.querySelector('.slides');
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + '%';
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector('.next-slide').addEventListener('click', function () {
  changeSlide();
  restart();
});

document.querySelector('.prev-slide').addEventListener('click', function () {
  changeSlide(false);
  restart();
});
