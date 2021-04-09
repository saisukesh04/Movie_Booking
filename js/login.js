const logIn = $('#login-form');
const signUp = $('#signup-form');
const loginBtn = $('#btn-login');
const signUpBtn = $('#btn-register');

signUp.hide();

$('#tosignup').on('click', function (e) {
  e.preventDefault();
  logIn.hide();
  signUp.show();
  console.log("Clicked");
});

$('#tologin').on('click', function (e) {
  e.preventDefault();
  logIn.show();
  signUp.hide();
});

loginBtn.on('click', function (e) {
  e.preventDefault();

  const data = {
    email: $('#login-email').val(),
    password: $('#login-password').val(),
  };

  window.location.replace('../index.html');
  console.log("Hello");
});