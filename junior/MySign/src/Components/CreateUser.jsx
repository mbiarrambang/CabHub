import React from 'react'
import { useState, } from 'react'

 function CreateUser() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-itemscenter'>
      <div className='w-50 bg-white rounded p-3'>
        <form >
            <h2>Add user</h2>
            <div className='mb-2'>
                <lable htmlFor="">Name</lable>
                <input type='text' placeholder='Enter name' className='form-control'/>
            </div>
            <div className='mb-2'>
                <lable htmlFor="">Email</lable>
                <input type='text' placeholder='Enter name' className='form-control'/>
            </div>
            <div className='mb-2'>
                <lable htmlFor="">Password</lable>
                <input type='text' placeholder='Enter name' className='form-control'/>
            </div>
            <div className='mb-2'>
                <lable htmlFor="">Age</lable>
                <input type='text' placeholder='Enter name' className='form-control'/>
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default CreateUser