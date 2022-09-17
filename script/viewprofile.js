const accountName1El = document.querySelector('.account-name');
const profileUsernameNameEl = document.querySelector('.profile-username-name');
const profileUsernameUserEl = document.querySelector('.profile-username-user');
const imageProfileImgEl = document.querySelector('.image-profile-img');
const accountImg1El = document.querySelector('.account-img');
const followrequest =document.querySelector('.follow-btn');
const more_button =document.querySelector('.more');




//
// fetch("http://localhost/twitter/fetchdata_id.php", {
//     method: 'POST',
//     body: new URLSearchParams({
//         id: localStorage.getItem("destination")
//     })
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         accountName1El.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
//         profileUsernameNameEl.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
//         profileUsernameUserEl.innerHTML = `@${data[0]['username']}`
//         imageProfileImgEl.src = data[0]['image']
//     })





// fetch("http://localhost/twitter/fetchdata_id.php", {
//     method: 'POST',
//     body: new URLSearchParams({
//         id: localStorage.getItem("destination")
//     })
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         accountName1El.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
//         profileUsernameNameEl.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
//         profileUsernameUserEl.innerHTML = `@${data[0]['username']}`
//         imageProfileImgEl.src = data[0]['image']
//     })








 // follow user button
    followrequest.addEventListener('click', (e) => {            // add follow button functionality
        e.preventDefault()

    fetch("http://localhost/twitter/addfollower.php", {         //Fetch add follower api
        method: 'POST',
        body: new URLSearchParams({
            // follower_id:localStorage.getItem("id"),
            // following_id: localStorage.getItem("destination")
            follower_id:233,
            following_id: 319
        })
    })
        .then(response => response.json())
        .then(data => {

            console.log(data);

        })


    })



// Block user button

    more_button.addEventListener('click', (e) => {          //add button functionality
        e.preventDefault()

    fetch("http://localhost/twitter/blockuser.php", {       //Fetch block user api
        method: 'POST',
        body: new URLSearchParams({                         //send user id to block
            // follower_id:localStorage.getItem("id"),
            // following_id: localStorage.getItem("destination")
            users_id:233,
            users_id1: 319
        })
    })
        .then(response => response.json())
        .then(data => {

            console.log(data);

        })


    })




// Follower count

fetch("http://localhost/twitter/countfollowers.php", {       //Fetch block user api
    method: 'POST',
    body: new URLSearchParams({                         //send user id to block
        // follower_id:localStorage.getItem("id"),
        // following_id: localStorage.getItem("destination")
        follower_id:233,
    })
})
    .then(response => response.json())
    .then(data => {

        console.log(data);

    })


})












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
