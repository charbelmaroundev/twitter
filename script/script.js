const editBtnEL = document.querySelector(".edit-profile-btn")
const popupEl = document.querySelector(".popup")
const backdropEl = document.querySelector(".backdrop")
const closeEL = document.getElementById("close")

//get_name = document.querySelector(".account-details-name");
get_name = document.getElementsByClassName("account-details-username");
get_details_name = document.getElementsByClassName("account-details-name");
get_account_name=document.getElementsByClassName("account-name");
get_profile_name = document.getElementsByClassName("profile-username-name");
get_profile_username = document.getElementsByClassName("profile-username-user");
get_profile_title_name = document.getElementsByClassName("title_name");



close = () => {
    popupEl.classList.toggle("none")
    backdropEl.classList.toggle("none")
}

editBtnEL.addEventListener('click', close)

backdropEl.addEventListener('click', close)

closeEL.addEventListener('click', close)




user_page();

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
    })
}


getlogin_id(){
  fetch("http://localhost/twitter/login.php?")
    .then(response => response.json())
    .then((data) => {
    let user_id="";
    user_id=data[]

})

}
