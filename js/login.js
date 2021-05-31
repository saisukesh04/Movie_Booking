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

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let body = {
    email: $('#login-email').val(),
    password: $('#login-password').val()
  };

  let strJson = JSON.stringify(body);
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: strJson
  }

  fetch("http://localhost:3000/login", requestOptions)
    .then(response => response.json())
    .then((result) => {
      if (result.status == "failure")
        console.log("Invalid Creds");
      else {
        console.log(result);
        window.location.replace('../index.html');
        console.log("Hello");
      }
    }).catch((err) => {
      console.log(err);
    });
});

signUpBtn.on('click', function (e) {
  e.preventDefault();

  let pass = $("#password").val();
  let confPass = $("#confirm-password").val();
  let myName = $('#fname').val() + " " + $('#lname').val();

  if (pass === confPass) {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let body = {
      name: myName,
      email: $("#email").val(),
      password: pass
    };

    let strJson = JSON.stringify(body);
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: strJson
    }

    fetch("http://localhost:3000/signup", requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result);
        if (result.status == "failure")
          console.log("Invalid Creds");
        else {
          console.log(result);
          window.location.replace('../index.html');
          console.log("Hello");
        }
      }).catch((err) => {
        console.log(err);
      });
  }else{
    alert("Passwords do not match");
  }
});