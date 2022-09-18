const accountName1El = document.querySelector('.account-name');
const profileUsernameNameEl = document.querySelector('.profile-username-name');
const profileUsernameUserEl = document.querySelector('.profile-username-user');
const imageProfileImgEl = document.querySelector('.image-profile-img');
const accountImg1El = document.querySelector('.account-img');

const followrequest = document.querySelector('.follow-btn');
const more_button = document.querySelector('.more');
const followerscount = document.querySelector('.profile-followers');
const followingcount = document.querySelector('.profile-following');

fetch("http://localhost/twitter/fetchdata_id.php", {
    method: 'POST',
    body: new URLSearchParams({
      id: localStorage.getItem("destination")
    })
  })
  .then(response => response.json())
  .then(data => {
    accountName1El.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`;
    profileUsernameNameEl.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`;
    profileUsernameUserEl.innerHTML = `@${data[0]['username']}`;
    imageProfileImgEl.src = data[0]['image'];
  });




// follow user button
follow_button_toggle = false;

followrequest.addEventListener('click', (e) => { // add follow button functionality
      e.preventDefault()
      follow_button_toggle = !follow_button_toggle;
      if (follow_button_toggle == true) {

        fetch("http://localhost/twitter/addfollower.php", { //Fetch add follower api
            method: 'POST',
            body: new URLSearchParams({
              follower_id: localStorage.getItem("id"),
              following_id: localStorage.getItem("destination")
            })
          })
          .then(response => response.json())
          .then(data => {
            followrequest.innerHTML="Unfollow";
            console.log(data);

          })


      //Unfollow user
      }
       else {
        fetch("http://localhost/twitter/removefollower.php", { //Fetch add follower api
            method: 'POST',
            body: new URLSearchParams({
              follower_id: localStorage.getItem("id"),
              following_id: localStorage.getItem("destination")
            })
          })
          .then(response => response.json())
          .then(data => {
            console.log("I am here");
            followrequest.innerHTML="follow";
            console.log(data);

          })


      }
    })









    // Following count

    fetch("http://localhost/twitter/countfollowing.php", { //Fetch block user api
      method: 'POST',
      body: new URLSearchParams({ //send user id to block
        // follower_id: localStorage.getItem("id"),
        follower_id: localStorage.getItem("destination")
        // follower_id: 233,
      })
    })
    .then(response => response.json())
    .then(data => {

      console.log(data);

      followingcount.innerHTML = `${data} Following`;
      // followingcount.append(" Following")
    })


    // Follower count

    fetch("http://localhost/twitter/countfollowers.php", { //Fetch block user api
      method: 'POST',
      body: new URLSearchParams({ //send user id to block
        // follower_id: localStorage.getItem("id"),
        follower_id: localStorage.getItem("destination")
        // follower_id: 233,
      })
    })
    .then(response => response.json())
    .then(data => {

      console.log(data);

      followerscount.innerHTML = `${data} Followers`;

    })



    // Block user button

    more_button.addEventListener('click', (e) => { //add button functionality
      e.preventDefault()

      fetch("http://localhost/twitter/blockuser.php", { //Fetch block user api
          method: 'POST',
          body: new URLSearchParams({ //send user id to block
            user_id: localStorage.getItem("id"),
            blocked_id: localStorage.getItem("destination")
          })
        })
        .then(response => response.json())
        .then(data => {

          console.log(data);

        })


    })
