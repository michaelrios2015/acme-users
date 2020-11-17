const render = ({ users, userList, userMap, curr}) => {
    const html = `
    ${ users.map ( (user, idx) => ` 
        <li>
            <a href = '#${ idx }'>${ user }</a>
            ${
               curr === idx ? `
               <ul>
               ${
                   userMap[user].map( desc => `
                       <li>
                           ${ desc } 
                       </li>
                       `).join('')
               }
                </ul>
               ` : '' 
            }
            
        </li>
    `).join('') }
    `;

    //console.log(html);
    userList.innerHTML = html;
};

module.exports = render;