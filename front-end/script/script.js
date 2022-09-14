const editBtnEL = document.querySelector(".edit-profile-btn")
const popupEl = document.querySelector(".popup")
const backdropEl = document.querySelector(".backdrop")
const closeEL = document.getElementById("close")

close = () => {
    popupEl.classList.toggle("none")
    backdropEl.classList.toggle("none")
}

editBtnEL.addEventListener('click', close)

backdropEl.addEventListener('click', close)

closeEL.addEventListener('click', close)



