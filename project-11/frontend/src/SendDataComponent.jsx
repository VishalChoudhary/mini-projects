import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SendDataComponent = () => {

  const [users,setUsers] = useState([]); // State to store user list from backend

  useEffect(()=>{
    axios.post('http://localhost:5000/api/data',{
      name: "Chris",
      email: "chris@gmail.com"
    })
    .then(res=>setUsers(res.data))
    .catch(err=>console.log('Error: ',err));
  },[])

  return (
    <div>
      <h2>User recieved from backend</h2>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name}-{user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default SendDataComponent;