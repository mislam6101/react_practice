import axios from 'axios';
import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

function NewUsers() {
    const {
        register, handleSubmit, formState : {errors}
    } = useForm();
    const onsubmit = (data) => {
        // {console.log(data)}
        userEntry(data);
    }
    const userEntry = (data) =>{
        axios.post('http://localhost/PWAD-68/api/blog/add_user.php', data)
        .then(function(response){
            alert(response.data);
        });
    }
  return (<>
    <div className='container'>
        <h2>New Users by Useform</h2><br/><br/>
        <form className='form' onSubmit={handleSubmit(onsubmit)}>
            <input type='text'  {...register('fname')}  placeholder='enter your name'/><br/><br/>
            <input type='text'  {...register('email')} placeholder='enter your email'/><br/><br/>

            <input type='submit' className='btn btn-success'/>
        </form>
        
    </div>
  </>)
}

export default NewUsers