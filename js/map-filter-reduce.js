const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];




//2.
    let filtered = users.filter(function(user){
        if(user.languages.length >= 3) {
            return user.languages;
        }

    });

    //console.log(filtered);



//3.
    let emailAddress = users.map(function (emails){
        return emails.email.split(',')
    })
//console.log(emailAddress)


//4.
    let initialValue = 0;
    let totalYearsExperience = users.reduce(function (total, years){
        return total + years.yearsOfExperience
    }, initialValue);

    let yearsAverage = totalYearsExperience / 5;
//console.log(totalYearsExperience);
//console.log(yearsAverage);


//5.
    var longestEmail = users.reduce(function (email1, email2){
        if ( email1.email.length > email2.email.length) {
            return email1.email
        } else {
            return email2
        }

    })

//console.log(longestEmail)


//6.
    let nameString = users.reduce(function (accumulator, user){
        if (accumulator === ''){
            return user.name
        } else {
            return accumulator + ', ' + user.name;
        }
    },'')

console.log(nameString)