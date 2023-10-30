// for notice
alert("This web application is still in progress. Sila Janna at Sharmine ang tatapos nito hehe\n - Ali");

// get the value of username and password and display it
const btnLogin = document.getElementById("login-btn");

btnLogin.addEventListener("click", function(){
    var username = document.forms['login-form']['username'].value;
    var password = document.forms['login-form']['password'].value;
    alert("Username: " + username + "\nPassword: " + password);
});

// show and hide password using mouseover and mouseout
const viewIcon = document.getElementById("view-icon");

viewIcon.addEventListener("mouseover", function(){
    document.forms['login-form']['password'].type = "text";
});
viewIcon.addEventListener("mouseout", function(){
    document.forms['login-form']['password'].type = "password";
});






