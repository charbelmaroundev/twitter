const registerEl = document.querySelector(".btn-signup")
const loginbtnEl = document.querySelector(".btn-login")
const popup1El = document.querySelector(".signup-popup")
const popup2El = document.querySelector('.login-popup')
const backdropEl1 = document.querySelector(".backdrop1")
const backdropEl2 = document.querySelector(".backdrop2")
const loginUsernameEl = document.getElementById('login-username')
const loginPasswordEl = document.getElementById('login-password')
const loginBtnEl = document.querySelector('.login-btn')
const signupFirstnameEl = document.getElementById('signupFirstname')
const signupLastnameEl = document.getElementById('signupLastname')
const signupUsernameEl = document.getElementById('signupUsername')
const signupEmailEl = document.getElementById('signupEmail')
const signupPasswordEl = document.getElementById('signupPassword')
const registerbBtnEl = document.querySelector('.register-btn')
const emailTakenEl = document.querySelector('.email-taken')
const usernameTakenEl = document.querySelector('.username-taken')
const accountCreatedEl = document.querySelector('.account-created')
const wrongUsernamePasswordEl = document.querySelector('.wrong-username-password')

console.log(localStorage.getItem("logged"));

if (localStorage.getItem("logged") === "true") {
    window.location.href = 'homepage.html';

}

close1 = () => {
    popup1El.classList.toggle("none")
    backdropEl1.classList.toggle("none")
}

registerEl.addEventListener('click', close1)
backdropEl1.addEventListener('click', close1)


close2 = () => {
    popup2El.classList.toggle("none")
    backdropEl2.classList.toggle("none")
}

loginbtnEl.addEventListener('click', close2)
backdropEl2.addEventListener('click', close2)


registerbBtnEl.addEventListener('click', (e) => {
    e.preventDefault()

    let url = "http://localhost/twitter/register.php";
    let parameters = {
        method: 'POST',
        body: new URLSearchParams({
            firstname: signupFirstnameEl.value,
            lastname: signupLastnameEl.value,
            username: signupUsernameEl.value,
            email: signupEmailEl.value,
            password: signupPasswordEl.value,
        })
    }
    fetch(url, parameters)
        .then(response => response.json())
        .then(data => {
            if (data['1'] == "EMAIL") {
                console.log("THIS EMAIL IS TAKEN");
                emailTakenEl.classList.remove("opacity")
            } else if (data['1'] == "USERNAME") {
                console.log("THIS USERNAME IS TAKEN");
                usernameTakenEl.classList.remove("opacity")
            } else {
                console.log(data);
                localStorage.setItem("logged", true);
                console.log("ACCOUNT CREATED");
                accountCreatedEl.classList.remove("opacity")
                window.setTimeout(function () {
                    window.location.href = 'homepage.html';
                }, 5000);
            }
        })
})

loginBtnEl.addEventListener('click', (e) => {
    e.preventDefault()

    let url = "http://localhost/twitter/login.php";
    let parameters = {
        method: 'POST',
        body: new URLSearchParams({
            username: loginUsernameEl.value,
            password: loginPasswordEl.value,
        })
    }
    fetch(url, parameters)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data) {
                wrongUsernamePasswordEl.innerHTML = "Logged in"
                wrongUsernamePasswordEl.style.color = "green"
                wrongUsernamePasswordEl.classList.remove("opacity")
                window.setTimeout(function () {
                    window.location.href = 'homepage.html';
                }, 5000);
                localStorage.setItem("logged", true);
            } else {
                wrongUsernamePasswordEl.style.color = "red"
                wrongUsernamePasswordEl.classList.remove("opacity")
                wrongUsernamePasswordEl.innerHTML = "Your username and password are wrong!"
                localStorage.setItem("logged", false);

            }
        })
})











function user_page(){

  fetch("http://localhost/twitter/user_profile.php?id="+getlogin_id)
    .then(response => response.json())
    .then((data) => {
      get_name[0].innerHTML = "@"+data[0].username;
      get_profile_name[0].textContent= data[0].first_name +" " + data[0].last_name;
      get_profile_username[0].innerHTML = "@"+data[0].username;
      get_profile_title_name[0].textContent= data[0].first_name +" " + data[0].last_name;
      get_account_name[0].textContent= data[0].first_name +" " + data[0].last_name;
      get_details_name[0].textContent= data[0].first_name +" " + data[0].last_name;
    });
}

function getlogin_id(){
  fetch("http://localhost/twitter/login.php?")
    .then(response => response.json())
    .then((data) => {
    let user_id="";
    user_id=data[0];});
}
