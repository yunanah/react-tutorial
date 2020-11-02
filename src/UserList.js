import React from 'react';
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'yura',
            email: 'bbyl6319@gmail.com'
        },
        {
            id: 2,
            username: 'kiki',
            email: 'kiki@naver.com'
        },
        {
            id: 3,
            username: 'tata',
            email: 'tata@naver.com'
        }
    ];
    return (
        <div>
            {
                users.map(
                    (user) => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList;