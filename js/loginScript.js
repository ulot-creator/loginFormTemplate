function showPword() {
  var pwordType = document.getElementById('password').type;
  if (pwordType == "password") {
    document.getElementById('password').type = "text";
  }else {
    document.getElementById('password').type = "password";
  }
}

function signUp() {
  var div1 = document.getElementById('login-form').style.display;
  if (div1 = "flex") {
  document.getElementById('login-form').style.display = "none";
}

document.getElementById('signup').classList.remove("bg-white");
document.getElementById('signup').classList.add("bg-cream");

document.getElementById('login').classList.add("bg-white");
document.getElementById('login').classList.remove("bg-cream");


var div = document.getElementById('signIn-Form').style.display;
if (div = "none") {
  document.getElementById('signIn-Form').style.display = "flex";
}
}

function login() {
  var div1 = document.getElementById('login-form').style.display;
  if (div1 = "none") {
    document.getElementById('login-form').style.display = "flex";
  }

  var div = document.getElementById('signIn-Form').style.display;
  if (div = "flex") {
    document.getElementById('signIn-Form').style.display = "none";
  }

  document.getElementById('signup').classList.add("bg-white");
  document.getElementById('signup').classList.remove("bg-cream");

  document.getElementById('login').classList.remove("bg-white");
  document.getElementById('login').classList.add("bg-cream");

}
