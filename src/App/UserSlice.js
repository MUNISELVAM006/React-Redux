import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
name : 'user',
initialState:{users :[]},
reducers :{
    addUser : (state,action)=>{
   state.users = [...state.users,action.payload]
    },
    updateUser :(state,action)=>{
                state.users= state.users.map((item)=>
        item.email === action.payload.user.email? action.payload.user : item
                )

                
    },
    deleteUser :(state,action)=>{
state.users=state.users.filter((item,index)=>index != action.payload)
    }
}


})

export const {addUser,deleteUser,updateUser} = userSlice.actions

export default userSlice.reducer
