import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form_input');
const formMessage = document.querySelector('.form_message');
const invalidEmail = document.getElementById('input_error');
const successEmail = document.getElementById('success-icon-input');
const invalidMessage = document.getElementById('message_error');
const successMessage = document.getElementById('success-icon-message');
const formBtn = document.querySelector('.form-btn');
const modal = document.getElementById('myModal');
const closeModalBtn = document.querySelector('.modal_close-icons');
const modalTitle = document.querySelector('.modal_title');
const modalText = document.querySelector('.modal_text');
const body = document.querySelector('body');

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

// listener to interact with form
formInput.addEventListener('change', event =>
  onChangeInput(event, invalidEmail, successEmail)
);
formMessage.addEventListener('input', event =>
  onChangeInput(event, invalidMessage, successMessage)
);
form.addEventListener('submit', onBtnSubmit);

// listener for close modal window
closeModalBtn.addEventListener('click', onBtnClose);
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    onBtnClose();
  }
});
window.addEventListener('click', event => {
  if (event.target === modal) {
    onBtnClose();
  }
});

function onBtnSubmit(event) {
  event.preventDefault();
  formBtn.disabled = true;

  const email = event.currentTarget.elements.email.value.trim();
  const message = event.currentTarget.elements.usermessage.value.trim();

  postData(email, message)
    .then(response => {
      modalTitle.textContent = response.data.title;
      modalText.textContent = response.data.message;

      modal.classList.add('is-open');
      form.reset();
      body.style.overflow = 'hidden';
      successEmail.classList.add('visually-hidden');
      successMessage.classList.add('visually-hidden');
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `${error.message}`,
      });
    })
    .finally(() => (formBtn.disabled = false));
}

async function postData(email, message) {
  const result = await axios.post(BASE_URL, {
    email,
    comment: message,
  });

  return result;
}

function onChangeInput(event, inValidField, successField) {
  const value = event.target.value;
  const isValid = event.target.validity.valid;

  if (value && isValid) {
    event.target.style.color = '#292929';
    inValidField.classList.add('visually-hidden');
    successField.classList.remove('visually-hidden');
  } else {
    event.target.style.color = '#E74A3B';
    successField.classList.add('visually-hidden');
    inValidField.classList.remove('visually-hidden');
    if (value === '') {
      event.target.style.color = '#292929';
    }
  }
}

function onBtnClose() {
  modal.classList.remove('is-open');
  body.style.overflow = 'visible';
}
