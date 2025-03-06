import {configureStore} from '@reduxjs/toolkit'
import  userSlice  from '../App/UserSlice'
const store = configureStore({
    reducer :{
        userInfo : userSlice,
    }
})
export default store