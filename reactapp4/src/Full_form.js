import React from 'react'
import { useState } from 'react'

function Full_form() {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,  [name]:value}));
    }
  return (
    <>
    <h3>Registration Form</h3>
    <form>
        <input type='text' name='fullname' onChange={handleChange} placeholder='Enter your fullname' /><br/><br/>
        <input type='number' name='age' onChange={handleChange} placeholder='Enter your Age' /><br/><br/>
        <select name='district' onChange={handleChange}>
            <option>Select One</option>
            <option>Dhaka</option>
            <option>Chottogram</option>
        </select>
    </form >
    {console.log(inputs)}
    </>
  )
}

export default Full_form