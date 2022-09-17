const accountImgEl = document.querySelectorAll('#account-img')
const accountDetailsUsernameEl = document.querySelector('.account-details-username')
const accountDetailsName = document.querySelector('.account-details-name')
const accountDetailsUsername = document.querySelector('.account-details-username')
const searchEl = document.getElementById('search');
const searchResultsEl = document.querySelector('.search-results');
const accountNameEl = document.querySelector('.account-name');

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
        // console.log(data)
        accountDetailsName.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`
        accountDetailsUsername.innerHTML = `@${data[0]['username']}`
        accountImgEl.forEach((img) => {
            img.src = data[0]['image']
        })
    })

searchEl.addEventListener('keyup', () => {
    let url = "http://localhost/twitter/search.php";
    let parameters = {
        method: 'POST',
        body: new URLSearchParams({
            search: searchEl.value
        })
    }
    const results = [];
    fetch(url, parameters)
        .then(response => response.json())
        .then(data => {
            searchResultsEl.classList.remove('none');
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i]['id']);
                let result = `
                <div id="${data[i]['id']}" class="result">
                    <div>
                        <img src="${data[i]['image']}" alt="">
                    </div>
                    <div>
                        <h1 class="result-name">${data[i]['firstname']} ${data[i]['lastname']}</h1>
                        <h1 class="result-username">@${data[i]['username']}</h1>
                    </div>
                </div>
                `
                results.push(result)
            }
            searchResultsEl.innerHTML = results;
            const resultEl = document.querySelectorAll('.result')
            resultEl.forEach((accounts) => {
                accounts.addEventListener('click', (accounts) => {
                    localStorage.setItem("destination", accounts.path[2].id);
                    window.location.href = 'viewprofile.html';
                })
            })
        })
})