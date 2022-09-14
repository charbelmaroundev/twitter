const registerEl = document.querySelector(".btn-signup")
const loginbtnEl = document.querySelector(".btn-login")
const popup1El = document.querySelector(".signup-popup")
const popup2El = document.querySelector('.login-popup')
const backdropEl1 = document.querySelector(".backdrop1")
const backdropEl2 = document.querySelector(".backdrop2")

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