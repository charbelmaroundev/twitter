const accountImgEl = document.querySelectorAll('#account-img');
const accountDetailsUsernameEl = document.querySelector('.account-details-username');
const accountDetailsName = document.querySelector('.account-details-name');
const searchEl = document.getElementById('search');
const searchResultsEl = document.querySelector('.search-results');
const tweetTextEl = document.getElementById('tweet-text')
const tweetBtnEl = document.querySelector('.tweet-btn');
const fileInputEl = document.getElementById('file-input')

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
        accountDetailsName.innerHTML = `${data[0]['firstname']} ${data[0]['lastname']}`;
        accountDetailsUsernameEl.innerHTML = `@${data[0]['username']}`;
        accountImgEl.forEach((img) => {
            img.src = data[0]['image'];
        });
    });

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
                `;
                results.push(result);
            }
            searchResultsEl.innerHTML = results;
            const resultEl = document.querySelectorAll('.result');
            resultEl.forEach((accounts) => {
                accounts.addEventListener('click', (accounts) => {
                    localStorage.setItem("destination", accounts.path[2].id);

                    if (localStorage.getItem("destination") == localStorage.getItem("id")) {
                        window.location.href = 'profilepage.html';
                    } else {
                        window.location.href = 'viewprofile.html';
                    }

                });
            });
        });
});

tweetBtnEl.addEventListener('click', () => {
    // console.log(tweetTextEl.value);
    if (fileInputEl.files[0] != undefined) {
        const readFile = fileInputEl => {
            const FR = new FileReader();
            FR.addEventListener("load", (evt) => {
                srcData = evt.target.result;
                fetch('http://localhost/twitter/tweet.php', {
                    method: 'POST',
                    body: new URLSearchParams({
                        tweet_text: tweetTextEl.value,
                        tweet_image: srcData,
                        user_id: localStorage.getItem("id")
                    })
                })
                    .then(response => response.json())
                    .then(data => data);
                // console.log(tweetTextEl.value);
                // console.log(srcData);
            });
            FR.readAsDataURL(fileInputEl.files[0]);
        };
        readFile(fileInputEl);
    };
})
