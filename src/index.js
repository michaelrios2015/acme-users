const { users, userMap} = require('./data');

const render = require('./render');

const userList = document.querySelector('#user-list');
//console.log(userList);

let curr = window.location.hash.slice(1) * 1;
//console.log(curr);

const _render = () =>{
    render({userMap, users, userList, curr});
}

_render();

window.addEventListener('hashchange', ()=> {
    curr = window.location.hash.slice(1)*1;
    console.log(curr);
    _render();
});