import React from 'react'
import '../App.css'


function UpdateUser() {
  return (
    <div className='mian-div'>
      <div className='main-form'>
        <form >
          <h2>Update user</h2>
          <div className='mb-2'>
            <lable htmlFor="">Name</lable>
            <input type='text' placeholder='Enter name' className='form-control' />
          </div>
          <div className='mb-2'>
            <lable htmlFor="">Email</lable>
            <input type='text' placeholder='Enter name' className='form-control' />
          </div>
          <div className='mb-2'>
            <lable htmlFor="">Password</lable>
            <input type='text' placeholder='Enter name' className='form-control' />
          </div>
          <div className='mb-2'>
            <lable htmlFor="">Age</lable>
            <input type='text' placeholder='Enter name' className='form-control' />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}
export default UpdateUser
