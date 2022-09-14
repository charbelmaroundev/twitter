const registerEl = document.querySelector(".btn-signup")
const popupEl = document.querySelector(".signup-popup")
const backdropEl = document.querySelector(".backdrop")

close = () => {
    popupEl.classList.toggle("none")
    backdropEl.classList.toggle("none")
}

// registerEl.addEventListener('click', close, console.log("CLICK"))

registerEl.addEventListener('click', close)
backdropEl.addEventListener('click', close)