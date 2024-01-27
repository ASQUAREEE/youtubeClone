import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

name:'search',
initialState: {
  
},
reducers:{

 cacheResults: (state,action) => {

    state = Object.assign(state, action.payload);

 },
} 
});


export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;




















// now data structure play a huge role
//cahce: time complexity to search in an array is O(n)
//array.include -> O(n)

// if i use object/map then it will take O(1)

// {
//     i:
//     ip:
//     iph:
//     iphone:
// }

//new Map(); 