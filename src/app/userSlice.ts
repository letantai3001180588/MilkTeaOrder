import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import IUser from "../types/IUser";

interface UserState {
  username:string,
  first_name:string,
  last_name:string,
  email:string,

}

const initialState: UserState = {
  username:'',
  first_name:'',
  last_name:'',
  email:'',
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    //Add meal
    addUser: (state, action) => {
      if(action.payload){
        state.username=action.payload[0]?.username
        state.first_name=action.payload[0]?.first_name
        state.last_name=action.payload[0]?.last_name
        state.email=action.payload[0]?.email
      }
    },
    //Remove meal
    removeUser: (state, action: PayloadAction<string>) => {
    },
    //Empty cart
    emptyUser: (state) => {
      state.username=''
      state.first_name=''
      state.last_name=''      
      state.email=''
    },
  },
});

export const { addUser, removeUser, emptyUser } = userSlice.actions;
export const selectMeal = (state: RootState) => state.meals.meals.values;
export default userSlice.reducer;
