const registerEl = document.querySelector(".btn-signup")
const loginbtnEl = document.querySelector(".btn-login")
const popup1El = document.querySelector(".signup-popup")
const popup2El = document.querySelector('.login-popup')
const backdropEl1 = document.querySelector(".backdrop1")
const backdropEl2 = document.querySelector(".backdrop2")
const loginUsernameEl = document.getElementById('login-username')
const loginPasswordEl = document.getElementById('login-password')
const loginBtnEl = document.querySelector('.login-btn')

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

loginBtnEl.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('http://localhost/twitter/users.php')
        .then((response) => response.json())
        .then((data) => {
            for (i = 0; i < data.length; i++) {
                if (loginUsernameEl.value === data[i]['username'] && loginPasswordEl.value === data[i]['password']) {
                    console.log("LOGGED");
                    location.replace("homepage.html")
                }
            }
        })
})