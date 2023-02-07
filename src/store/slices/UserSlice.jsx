import {createSlice} from '@reduxjs/toolkit';
import { deleteUsers } from '../actions/index'

const userSlice = createSlice({
    name:"user",
    initialState : [],
    reducers: {
        addUser(state, action){
            state.push(action.payload)
        },
        removeUser(state, action){
            // state.splice(<itemId>, <How many items has to delete>)
            state.splice(action.payload, 1)
        },
        deleteAllUser(state, action){
            // state.length = 0
            return [];
        }
    },
    extraReducers(builder){
        builder.addCase(deleteUsers, () => {
            return [];
        })
    }
})

export { userSlice };
export const {addUser, removeUser} = userSlice.actions;