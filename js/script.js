var sliders = document.getElementsByClassName ('main-slider-item');
var buttons = document.getElementsByClassName ('main-slider-dot');
var openButton = document.querySelector ('.write-us-button');
var modal = document.querySelector ('.modal-feedback');
var closeButton = document.querySelector ('.close-form-button');
var loginField = document.getElementById ('username');
var emailField = document.getElementById ('useremail');
var commentField = document.getElementById ('comment');
var sendButton = document.querySelector ('.send-form-button');

openButton.addEventListener ('click', function (event) {
  event.preventDefault ();
  modal.classList.add ('active-modal');
});

closeButton.addEventListener ('click', function () {
  modal.classList.remove ('active-modal');
});

sendButton.addEventListener ('click', function (event) {
  if (!loginField.value || !emailField.value || !commentField.value) {
    event.preventDefault ();
    modal.classList.remove('invalid-form');
    void modal.offsetWidth;
    modal.classList.add ('invalid-form');
  }
  if (!loginField.value) {
    loginField.classList.add ('invalid-field');
  }
  if (!emailField.value) {
    emailField.classList.add ('invalid-field');
  }
  if (!commentField.value) {
    commentField.classList.add ('invalid-field');
  }
}, false);

if (!(buttons.length===0 && sliders.length===0)) {
  buttons[0].onclick = function () {
    for (var i = 1; i < buttons.length; i++) {
      if (buttons[i].classList.contains ('active-dot')) {
          buttons[i].classList.remove ('active-dot');
          sliders[i].classList.remove ('active');
      }
    }
    buttons[0].classList.add ('active-dot');
    sliders[0].classList.add ('active');
  }

  buttons[1].onclick = function () {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].classList.contains ('active-dot')) {
          buttons[i].classList.remove ('active-dot');
          sliders[i].classList.remove ('active');
      }
    }
    buttons[1].classList.add ('active-dot');
    sliders[1].classList.add ('active');
  }

  buttons[2].onclick = function () {
    for (var i = 0; i < buttons.length; i++) {
      if(buttons[i].classList.contains ('active-dot')) {
          buttons[i].classList.remove ('active-dot');
          sliders[i].classList.remove ('active');
      }
    }
    buttons[2].classList.add ('active-dot');
    sliders[2].classList.add ('active');
  }
}
