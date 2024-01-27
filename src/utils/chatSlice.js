import { createSlice } from "@reduxjs/toolkit";

 const chatSlide = createSlice({

 name:'chat',
  initialState: { 
     
    messages: []

  },

   reducers: {
    addMessage: (state, action) =>{
        state.messages.splice(20,1); //limit your message to 60

      state.messages.push(action.payload); //push from first
    },
   },
 })

 export const {addMessage} = chatSlide.actions;

 export default chatSlide.reducer;