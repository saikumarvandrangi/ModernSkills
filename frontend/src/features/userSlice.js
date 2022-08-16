import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem('username'),
  },
  reducers: {
    loginAuth: (state,action) =>{
      state.user = action.payload;
    },
    logoutAuth:(state) =>{
      state.user= null;
    }
  },
});

export const { loginAuth,logoutAuth } = userSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = state => state.user.user;

export default userSlice.reducer;
