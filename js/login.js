const logIn = $('#login-form');
const signUp = $('#signup-form');

signUp.hide();

$('#tosignup').on('click', function (e) {
    e.preventDefault();
    logIn.hide();
    signUp.show();
    console.log("Clicked");
});

$('#tologin').on('click', function (e){
    e.preventDefault();
    logIn.show();
    signUp.hide();
});