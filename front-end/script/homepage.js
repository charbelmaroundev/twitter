const accountImgEl = document.querySelectorAll('#account-img');
const accountDetailsUsernameEl = document.querySelector('.account-details-username');
const accountDetailsName = document.querySelector('.account-details-name');
const searchEl = document.getElementById('search');
const searchResultsEl = document.querySelector('.search-results');
const tweetTextEl = document.getElementById('tweet-text')
const tweetBtnEl = document.querySelector('.tweet-btn');
const fileInputEl = document.getElementById('file-input');
const tweetsEl = document.querySelector('.tweets')

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


const tweetsUsers = [];
const tweets = [];
fetch('http://localhost/twitter/gettweets.php', {
    method: 'POST',
    body: new URLSearchParams({
        id: localStorage.getItem("id")
    })
})
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            let tweet = `
                            <div class="tweet">
                                <img class="account-img" src="assets/account-img.jpg" alt="">
                                <div class="tweet-details">
                                    <div class="tweeter-details">
                                        <a href="" class="tweeter-name">
                                            <p>Charbel Maroun</p>
                                            <span class="tweeter-handle">
                                                @charbeldev
                                            </span>
                                        </a>
                                    </div>
                                    <div class="tweet-text">
                                        <p>${data[i]['tweet_text']}</p>
                                    </div>
                                    <img class="tweet-img" src="${data[i]['tweet_image']}" alt="">
                                    <div class="tweet-icons">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" class="like-icon">
                                            <g>
                                                <path
                                                    d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            `
            tweets.push(tweet)
            tweetsEl.innerHTML = tweets;
            tweetsUsers.push(data[i]['user_id'])

            console.log(data[i]['user_id']);

            fetch('http://localhost/twitter/gettweets.php', {
                method: 'POST',
                body: new URLSearchParams({
                    id: localStorage.getItem("id")
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    let userDeatils = `
                    <div class="tweet">
                    <img class="account-img" src="assets/account-img.jpg" alt="">
                    <div class="tweet-details">
                        <div class="tweeter-details">
                            <a href="" class="tweeter-name">
                                <p>Charbel Maroun</p>
                                <span class="tweeter-handle">
                                    @charbeldev
                                </span>
                            </a>
                        </div>
                        <div class="tweet-text">
                            <p>${data[i]['tweet_text']}</p>
                        </div>
                        <img class="tweet-img" src="${data[i]['tweet_image']}" alt="">
                        <div class="tweet-icons">
                            <svg viewBox="0 0 24 24" aria-hidden="true" class="like-icon">
                                <g>
                                    <path
                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            `
                })

        }
    });






console.log(tweetsUsers);

tweetsUsers.forEach((tweetUser) => {
    // fetch("http://localhost/twitter/fetchdata_id.php", {
    //     method: 'POST',
    //     body: new URLSearchParams({
    //         id: tweetUser
    //     })
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     });
    console.log(tweetUser);

})


// console.log(tweetsUsers);
// fetch("http://localhost/twitter/fetchdata_id.php", {
//     method: 'POST',
//     body: new URLSearchParams({
//         id: 
//     })
// })
//     .then(response => response.json())
//     .then(data1 => {
//         console.log(data1);
//     });
