import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addUser} from '../src/App/UserSlice'
import { deleteUser } from '../src/App/UserSlice'
import {updateUser} from './App/UserSlice'

const Crud = () => {

    // const[data,setData]=useState([])
    const[user,setUser]=useState({
        name :'',
        age : "",
        email : '',
        number :'',
    })


const dispatch = useDispatch()
const users =useSelector((store)=>store.userInfo.users)
// console.log( 'data :' , users)

const[toggle,setToggle]=useState(false)

    const handleChange = (e)=>{
        const {name,value}=e.target
        setUser(
        {...user,[name]:value}
         )
    }

    const handleAdd =()=>{

        const {name,age,email,number}=user

        if(name ==''|| age ==''|| email ==''|| number =='' ){
         console.log('input feild is empty')
        return
        }

        dispatch(addUser(user))
        // setData([...data,user]);
        //  console.log(data);
        setUser({
            name :'',
        age : "",
        email : '',
        number :'',
            });
            };

           const handleDelete =(index)=>{
            dispatch(deleteUser(index))
           }

            const handleEdit =(user)=>{
              setUser(user)
              setToggle(true)
            }

            const handleUpdate =()=>{
         
              
                const updateIndex = users.findIndex((u)=>u.email === user.email)
                 
                if (updateIndex === -1) {
                    console.log("User not found in the list");
                    return;
                }

                dispatch(updateUser({index :updateIndex  ,user}))
                handleCancel()


            }

            const handleCancel =()=>{
                setUser({
                    name: "",
                    age : '',
                    email : '',
                    number : ''
                })
                setToggle(false)
            }

  return (
    <div>

        <div>
        <label>Name </label>
      <input 
      type='text'
      placeholder='Enter a name'
      value={user.name}
      name = 'name'
     
        onChange={handleChange}
      />
    <br />

    <label>age </label>
      <input 
      type='number'
      placeholder='Enter a age'
      value={user.age}
      name = 'age'
     
       onChange={handleChange}
      />
    <br />

    <label>Email </label>
      <input 
      type='email'
      placeholder='Enter a Email'
      value={user.email}
      name = 'email'
     
         onChange={handleChange}
      />
    <br />

    <label>PhoneNo </label>
      <input 
      type='number'
      placeholder='Enter a PhoneNo'
      value={user.number}
      name = 'number'
     
          onChange={handleChange}
      />
    <br />
{ !toggle ?(<button onClick={handleAdd} >Add</button>) : (
    <div>
    <button onClick={()=>handleUpdate()} >update</button>
    <button onClick={()=>handleCancel()} >cancel</button>
    </div>
)}
        </div>
     
    

    <div>
        <table>
            <thead>
                <tr>
                   <th>name</th>
                   <th>age</th> 
                   <th>email</th>
                   <th>number</th>
                   <th>actions</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user,index)=>

<tr key={index} >
   <td>{user.name} </td> 
   <td>{user.age} </td>
   <td>{user.email} </td>
   <td>{user.number} </td>
   <td>
   <button onClick={()=>handleEdit(user,index)}>Edit</button>
   <button onClick={()=>handleDelete(index)}>delete</button>
   </td>
</tr>

)}
            </tbody>
        </table>
    </div>


      

    </div>
  )
}

export default Crud


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser, deleteUser, updateUser } from "./App/UserSlice";

// const Crud = () => {
//   const [user, setUser] = useState({
//     name: "",
//     age: "",
//     email: "",
//     number: "",
//   });

//   const dispatch = useDispatch();
//   const users = useSelector((store) => store.userInfo.users) || []; // Ensure users is always an array
//   const [toggle, setToggle] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleAdd = () => {
//     const { name, age, email, number } = user;

//     if (!name || !age || !email || !number) {
//       console.log("Input field is empty");
//       return;
//     }

//     dispatch(addUser(user));
//     setUser({ name: "", age: "", email: "", number: "" });
//   };

//   const handleDelete = (index) => {
//     dispatch(deleteUser(index));
//   };

//   const handleEdit = (user) => {
//     setUser(user);
//     setToggle(true);
//   };

//   const handleUpdate = () => {
//     const updateIndex = users.findIndex((u) => u.email === user.email);

//     if (updateIndex === -1) {
//       console.log("User not found in the list");
//       return;
//     }

//     dispatch(updateUser({ index: updateIndex, user }));
//     handleCancel();
//   };

//   const handleCancel = () => {
//     setUser({ name: "", age: "", email: "", number: "" });
//     setToggle(false);
//   };

//   return (
//     <div>
//       <div>
//         <label>Name </label>
//         <input
//           type="text"
//           placeholder="Enter a name"
//           value={user.name}
//           name="name"
//           onChange={handleChange}
//         />
//         <br />

//         <label>Age </label>
//         <input
//           type="number"
//           placeholder="Enter an age"
//           value={user.age}
//           name="age"
//           onChange={handleChange}
//         />
//         <br />

//         <label>Email </label>
//         <input
//           type="email"
//           placeholder="Enter an email"
//           value={user.email}
//           name="email"
//           onChange={handleChange}
//         />
//         <br />

//         <label>Phone No </label>
//         <input
//           type="number"
//           placeholder="Enter a phone number"
//           value={user.number}
//           name="number"
//           onChange={handleChange}
//         />
//         <br />

//         {!toggle ? (
//           <button onClick={handleAdd}>Add</button>
//         ) : (
//           <div>
//             <button onClick={handleUpdate}>Update</button>
//             <button onClick={handleCancel}>Cancel</button>
//           </div>
//         )}
//       </div>

//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Email</th>
//               <th>Number</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.name}</td>
//                   <td>{user.age}</td>
//                   <td>{user.email}</td>
//                   <td>{user.number}</td>
//                   <td>
//                     <button onClick={() => handleEdit(user)}>Edit</button>
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5">No users found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Crud;
