import React from 'react';
import "./Users.css"

const UsersList = ({users=new Array(10).fill({name :  "Abhijeet", email: "abhijeet@gmail.com"})}) => {
    return (
    <div className="users">
        <div className="d-flex">
            <div className="name-head">Name</div>
            <div className="email-head">Email</div>
        </div>
        {users.map((i, idx) => (
            <div key={idx} className="user">
                <div>{i.name}</div>
                <div className="email">{i.email}</div>
            </div>
        ))}
    </div>)
    
}

export default UsersList;