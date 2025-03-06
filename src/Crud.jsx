// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {addUser} from '../src/App/UserSlice'
// import { deleteUser } from '../src/App/UserSlice'
// import {updateUser} from './App/UserSlice'

// const Crud = () => {

//     // const[data,setData]=useState([])
//     const[user,setUser]=useState({
//         name :'',
//         age : "",
//         email : '',
//         number :'',
//     })


// const dispatch = useDispatch()
// const users =useSelector((store)=>store.userInfo.users)
// // console.log( 'data :' , users)

// const[toggle,setToggle]=useState(false)

//     const handleChange = (e)=>{
//         const {name,value}=e.target
//         setUser(
//         {...user,[name]:value}
//          )
//     }

//     const handleAdd =()=>{

//         const {name,age,email,number}=user

//         if(name ==''|| age ==''|| email ==''|| number =='' ){
//          console.log('input feild is empty')
//         return
//         }

//         dispatch(addUser(user))
//         // setData([...data,user]);
//         //  console.log(data);
//         setUser({
//             name :'',
//         age : "",
//         email : '',
//         number :'',
//             });
//             };

//            const handleDelete =(index)=>{
//             dispatch(deleteUser(index))
//            }

//             const handleEdit =(user)=>{
//               setUser(user)
//               setToggle(true)
//             }

//             const handleUpdate =()=>{
         
              
//                 const updateIndex = users.findIndex((u)=>u.email === user.email)
                 
//                 if (updateIndex === -1) {
//                     console.log("User not found in the list");
//                     return;
//                 }

//                 dispatch(updateUser({index :updateIndex  ,user}))
//                 handleCancel()


//             }

//             const handleCancel =()=>{
//                 setUser({
//                     name: "",
//                     age : '',
//                     email : '',
//                     number : ''
//                 })
//                 setToggle(false)
//             }

//   return (
//     <div>

//         <div>
//         <label>Name </label>
//       <input 
//       type='text'
//       placeholder='Enter a name'
//       value={user.name}
//       name = 'name'
     
//         onChange={handleChange}
//       />
//     <br />

//     <label>age </label>
//       <input 
//       type='number'
//       placeholder='Enter a age'
//       value={user.age}
//       name = 'age'
     
//        onChange={handleChange}
//       />
//     <br />

//     <label>Email </label>
//       <input 
//       type='email'
//       placeholder='Enter a Email'
//       value={user.email}
//       name = 'email'
     
//          onChange={handleChange}
//       />
//     <br />

//     <label>PhoneNo </label>
//       <input 
//       type='number'
//       placeholder='Enter a PhoneNo'
//       value={user.number}
//       name = 'number'
     
//           onChange={handleChange}
//       />
//     <br />
// { !toggle ?(<button onClick={handleAdd} >Add</button>) : (
//     <div>
//     <button onClick={()=>handleUpdate()} >update</button>
//     <button onClick={()=>handleCancel()} >cancel</button>
//     </div>
// )}
//         </div>
     
    

//     <div>
//         <table>
//             <thead>
//                 <tr>
//                    <th>name</th>
//                    <th>age</th> 
//                    <th>email</th>
//                    <th>number</th>
//                    <th>actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {users.map((user,index)=>

// <tr key={index} >
//    <td>{user.name} </td> 
//    <td>{user.age} </td>
//    <td>{user.email} </td>
//    <td>{user.number} </td>
//    <td>
//    <button onClick={()=>handleEdit(user,index)}>Edit</button>
//    <button onClick={()=>handleDelete(index)}>delete</button>
//    </td>
// </tr>

// )}
//             </tbody>
//         </table>
//     </div>


      

//     </div>
//   )
// }

// export default Crud

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "./App/UserSlice";

const Crud = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    number: "",
  });

  const dispatch = useDispatch();
  const users = useSelector((store) => store.userInfo.users);
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAdd = () => {
    const { name, age, email, number } = user;
    if (!name || !age || !email || !number) {
      console.log("Input field is empty");
      return;
    }
    dispatch(addUser(user));
    setUser({ name: "", age: "", email: "", number: "" });
  };

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  const handleEdit = (user) => {
    setUser(user);
    setToggle(true);
  };

  const handleUpdate = () => {
    const updateIndex = users.findIndex((u) => u.email === user.email);
    if (updateIndex === -1) {
      console.log("User not found in the list");
      return;
    }
    dispatch(updateUser({ index: updateIndex, user }));
    handleCancel();
  };

  const handleCancel = () => {
    setUser({ name: "", age: "", email: "", number: "" });
    setToggle(false);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {toggle ? "Update User" : "Add User"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />

          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            value={user.age}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />

          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />

          <input
            type="number"
            placeholder="Enter Phone No"
            name="number"
            value={user.number}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          {!toggle ? (
            <button
              onClick={handleAdd}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add
            </button>
          ) : (
            <>
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-center">User List</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Number</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.age}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.number}</td>
                  <td className="p-2 border flex justify-center space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Crud;
