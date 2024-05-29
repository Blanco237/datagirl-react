import React, { useEffect, useState } from 'react'
import classes from './users.module.css';
import axios from 'axios';

async function fetchUsers () {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    return data;
}

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function updateTable () {
            setLoading(true)
            const data = await fetchUsers();
            setUsers(data);
            setLoading(false)
        }

        updateTable();
    }, [])

    function modifyField(userId, field, value) {
        const idx = users.findIndex((u) => u.id === userId)
        const user = users[idx];
        users.splice(idx, 1, {...user, [field] : value})
        setUsers([...users])
    }

  return (
    <div >
        <table className={classes.table}>
            <thead>
                <th>UserName</th>
                <th>Full Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Company</th>
            </thead>
            <tbody>
                {
                    loading ? <div className={classes.loader}>Loading...</div> : 
                    users.map((user) => {
                        return (<tr>
                            <td>{user.username}</td>
                            <td><input type='text' value={user.name} onChange={(e) => modifyField(user.id, 'name', e.target.value)} /></td>
                            <td>{user.phone}</td>
                            <td><input type='text' value={user.email} onChange={(e) => modifyField(user.id, 'email', e.target.value)} /></td>
                            <td>{user.company.name}</td>
                        </tr>)
                    })
                }               
            </tbody>
        </table>
    </div>
  )
}

export default Users