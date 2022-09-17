const accountName1El = document.querySelector('.account-name');
const profileUsernameNameEl = document.querySelector('.profile-username-name');
const profileUsernameUserEl = document.querySelector('.profile-username-user');
const imageProfileImgEl = document.querySelector('.image-profile-img');
const accountImg1El = document.querySelector('.account-img');
const followrequest =document.querySelector('follow-btn');
fetch("http://localhost/twitter/fetchdata_id.php", {
    method: 'POST',
    body: new URLSearchParams({
        id: localStorage.getItem("destination")
    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        accountName1El.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
        profileUsernameNameEl.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
        profileUsernameUserEl.innerHTML = `@${data[0]['username']}`
        imageProfileImgEl.src = data[0]['image']
    })



    loginBtnEl.addEventListener('click', (e) => {
        e.preventDefault()

    fetch("http://localhost/twitter/addfollower.php", {
        method: 'POST',
        body: new URLSearchParams({
            id:localStorage.getItem("id"),
            blockedid: localStorage.getItem("destination")

        })
    })
        .then(response => response.json())
        .then(data => {
          
            console.log(data);

        })


    }






















// fetch("http://localhost/twitter/fetchdata_id.php", {
//     method: 'POST',
//     body: new URLSearchParams({
//         id: localStorage.getItem("id")
//     })
// })
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data)
//         // accountDetailsName.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
//         // accountDetailsUsername.innerHTML = `@${data[0]['username']}`
//         accountImg1El.src = data[0]['image']
//     })
