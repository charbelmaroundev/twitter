const accountImgEl = document.querySelectorAll('#account-img')
const accountDetailsUsernameEl = document.querySelector('.account-details-username')
const accountDetailsName = document.querySelector('.account-details-name')
const accountDetailsUsername = document.querySelector('.account-details-username')
const searchEl = document.getElementById('search');

let url = "http://localhost/twitter/fetchdata_id.php";
let parameters = {
    method: 'POST',
    body: new URLSearchParams({
        id: localStorage.getItem("id")
    })
}
fetch(url, parameters)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        accountDetailsName.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
        accountDetailsUsername.innerHTML = `@${data[0]['username']}`
        accountImgEl.forEach((img) => {
            img.src = data[0]['image']
        })
    })

searchEl.addEventListener('keyup', () => {
    console.log(searchEl.value)
    let url = "http://localhost/twitter/search.php";
    let parameters = {
        method: 'POST',
        body: new URLSearchParams({
            search: searchEl.value
        })
    }
    fetch(url, parameters)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
})