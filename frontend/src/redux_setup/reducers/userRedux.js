import {createSlice} from "@reduxjs/toolkit"

const slice= createSlice({
    name:"user",
    
    initialState:{
        userInfo:null
    },
    reducers:{
        setUser:(state,action)=>{
       
            state.userInfo=action.payload.user
        },
        deleteUser:(state,action)=>{
            console.log("called")
            state.userInfo=null
        }
    }
})

export const {setUser,deleteUser} = slice.actions

export default slice.reducer