import { createSlice } from '@reduxjs/toolkit';
let counter = 0;
 let counterSlice = createSlice({
  name: 'counter',
  initialState: counter,
  reducers: {
    increase: (prevstate, action) => {
      prevstate.counter += 1;
    },
    decrease:(prevstate,action)=>{
        prevstate.counter -=1
    }
  },
});


export let counterReducer = counterSlice.reducer 
export let {increase,decrease}=counterSlice.actions