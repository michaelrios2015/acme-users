const faker = require('faker');

let users, userMap;

users = JSON.parse(window.localStorage.getItem('users'));
userMap = JSON.parse(window.localStorage.getItem('userMap'));

//console.log(users);


if(!users || !userMap){

    //_ => ssame as passing nothing??
    users = new Array(50).fill(' ').map( _ => faker.name.findName());
    window.localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
    
    //gives me an object with each username as a property with an array to store 
    //user data, since I just have one thing probaly overkill but could be useful in the future
    userMap = users.reduce((acc, user) => {
        acc[user] = new Array(1 + faker.random.number(1)).fill('-').map( _ => faker.name.jobDescriptor());
        return acc;
    }, {});
    window.localStorage.setItem('userMap', JSON.stringify(userMap));

}

module.exports = {
    users,
    userMap
}