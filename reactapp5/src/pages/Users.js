import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [inputs, setInputs] = useState({});
    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setInputs(values =>({...values, [name]:value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        userEntry();
    }
    // useEffect( () =>{
            
    //     }, [])
    const userEntry = () =>{
        axios.post('http://localhost/PWAD-68/api/blog/add_user.php', inputs)
        .then(function(response){
            alert(response.data);
        });
    }

  return (
    <div className='container'>
        <h2>New Users</h2><br/><br/>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' value={inputs.fname} name='fname' onChange={handleChange} placeholder='enter your name'/><br/><br/>
            <input type='text' value={inputs.email} onChange={handleChange} name='email' placeholder='enter your email'/><br/><br/>

            <input type='submit' className='btn btn-success'/>
        </form>
    </div>
  )
}

export default Users