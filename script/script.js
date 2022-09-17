const editBtnEL = document.querySelector(".edit-profile-btn")
const popupEl = document.querySelector(".popup")
const backdropEl = document.querySelector(".backdrop")
const closeEL = document.getElementById("close")
const editImgEl = document.getElementById('file-input')
const editSaveEl = document.getElementById('edit-save')
const editNameEl = document.getElementById('edit-name')

editSaveEl.addEventListener("click", () => {
    const readFile = editImgEl => {
        const FR = new FileReader();
        FR.addEventListener("load", (evt) => {
            srcData = evt.target.result
            console.log(srcData);
            const [first, last] = editNameEl.value.split(' ');
            fetch('http://localhost/twitter/editprofile.php', {
                method: 'POST',
                body: new URLSearchParams({
                    firstname: first,
                    lastname: last,
                    image: srcData
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
        });
        FR.readAsDataURL(editImgEl.files[0]);

    }
    readFile(editImgEl)
})

close = () => {
    popupEl.classList.toggle("none")
    backdropEl.classList.toggle("none")
}

editBtnEL.addEventListener('click', close)
backdropEl.addEventListener('click', close)
closeEL.addEventListener('click', close)