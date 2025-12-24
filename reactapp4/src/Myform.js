import React from 'react'
import { useState } from 'react'

function Myform() {
    const[name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name);
    }

  return (
    <>
    <h2>My Form</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange} placeholder='Enter Your name'/><br/>
        <br/>
        <input type='submit' value={'SUBMIT'}/>
    </form><br/><br/>

    {/* <p id='display'> Your Name : {name}</p> */}
    </>
    
  )
}

export default Myform