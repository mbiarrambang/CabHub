import React from 'react'
import { Link } from 'react-router-dom';
import { useState, } from 'react'

 function CustomerInfo() {
    const [user, setUsers] = useState([{
        Name:"mbi",
        Email:"mbi@gmail.com",
        Password:"1234",
        Age:20,
        
    }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
      <div className='w-50 bg-white rounded p-3'>\
      <Link to="/create" className='btn btn-success'>Add +</Link>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((user) => {
                     (<tr>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.password}</td>
                            <td>{user.Age}</td>
                            <td>
                            <Link to="/update" className='btn btn-success'>Update</Link>
                            <Link to="/" className='btn btn-success'>Delete</Link>
                            </td>
                        </tr>
                    );
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
  );
}
export default CustomerInfo
