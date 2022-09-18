const editBtnEL = document.querySelector(".edit-profile-btn");
const popupEl = document.querySelector(".popup");
const backdropEl = document.querySelector(".backdrop");
const closeEL = document.getElementById("close");
const editImgEl = document.getElementById('file-input');
const editSaveEl = document.getElementById('edit-save');
const editNameEl = document.getElementById('edit-name');
const accountNameEl = document.querySelector('.account-name');
const profileUsernameNameEl = document.querySelector('.profile-username-name');
const imageProfileImgEl = document.querySelector('.image-profile-img');
const accountImg = document.querySelector('.account-img');
const profileUsernameUserEl = document.querySelector('.profile-username-user');
const popupimgImgEl = document.querySelector('.popupimg-img');

updateProfile = () => {
    fetch("http://localhost/twitter/fetchdata_id.php", parameters = {
        method: 'POST',
        body: new URLSearchParams({
            id: localStorage.getItem("id")
        })
    })
        .then(response => response.json())
        .then(data => {
            accountNameEl.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`;
            profileUsernameNameEl.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`;
            profileUsernameUserEl.innerHTML = `@${data[0]['username']}`;
            imageProfileImgEl.src = data[0]['image'];
            accountImg.src = data[0]['image'];
            popupimgImgEl.src = data[0]['image'];
            editNameEl.value = `${data[0]['firstname']} ${data[0]['lastname']}`;
        });
};
updateProfile()

close = () => {
    popupEl.classList.toggle("none");
    backdropEl.classList.toggle("none");
}

editSaveEl.addEventListener("click", () => {
    if (editImgEl.files[0] != undefined) {
        const readFile = editImgEl => {
            const FR = new FileReader();
            FR.addEventListener("load", (evt) => {
                srcData = evt.target.result;
                const [first, last = ""] = editNameEl.value.split(' ');
                fetch('http://localhost/twitter/editprofile.php', {
                    method: 'POST',
                    body: new URLSearchParams({
                        id: localStorage.getItem("id"),
                        firstname: first,
                        lastname: last,
                        image: srcData
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        updateProfile();
                    });
            });
            FR.readAsDataURL(editImgEl.files[0]);
        };
        readFile(editImgEl);
    };
    close();
});

editBtnEL.addEventListener('click', close);
backdropEl.addEventListener('click', close);
closeEL.addEventListener('click', close);