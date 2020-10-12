import Axios from 'axios'
import React, { useEffect, useState } from 'react';
const UserList = () => {
    const [Users, setUsers] = useState([])
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then( res =>{
            setUsers(res.data)
        })
    }, [])
    return (  
        <div>
<ul>
    {Users.map(el=><li>{el.name}</li>)}
</ul>
        </div>
    );
}

export default UserList;
