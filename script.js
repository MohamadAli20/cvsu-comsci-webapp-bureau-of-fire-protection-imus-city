// for notice
alert("This web application is still in progress. \nSila Janna at Sharmine ang tatapos nito hehe\n - Ali");

// get the value of username and password and display it
const btnLogin = document.getElementById("login-btn");

btnLogin.addEventListener("click", function(){
    var username = document.forms['login-form']['username'].value;
    var password = document.forms['login-form']['password'].value;
    alert("Username: " + username + "\nPassword: " + password);
});

// show and hide password using mouseover and mouseout
// for login form
const loginView = document.getElementById('login-view');
loginView.addEventListener("mouseover", function(){       
    // document.getElementById('login-input').type = "text";
    document.forms['login-form']['password'].type = "text";
});
loginView.addEventListener("mouseout", function(){
    // document.getElementById('login-input').type = "password";
    document.forms['login-form']['password'].type = "password";
});

// forgot password
const forgotPass = document.getElementById('forgot-password');
forgotPass.addEventListener("mouseover", function(){
    forgotPass.style.textDecoration = "underline";
});
forgotPass.addEventListener("mouseout", function(){
    forgotPass.style.textDecoration = "none";
});

// for registratin form
// check if both passwords are matches and less than 6 characters
// const regPass = document.getElementById('reg-pass').value;
// const regConfirmPass = doocument.getElementById('reg-confirmpass').value;
// const warningMessage = document.getElementById('warning-message');



