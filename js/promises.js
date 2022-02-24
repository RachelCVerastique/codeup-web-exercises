const gitHubPromise = fetch('https://api.github.com/users',{headers: {'Authorization': `token ${MY_GITHUB_API_KEY}`}})
gitHubPromise.then(res => res.json())
        .then(user => console.log(user))



        .catch(err => console.log(err))





















///topfunky/events/public





// for (let i = 0; i < 1; i++) {
//     var pushEvent = data[4].created_at
//
// }
//console.log(pushEvent)

