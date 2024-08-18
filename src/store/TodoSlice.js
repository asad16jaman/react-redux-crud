import { createSlice } from "@reduxjs/toolkit";
let allData = [
  {
    name:"asad",
    age:25,
    gander:'male'
  },
  
]

let TodoSlice = createSlice({
  name:"todo",
  initialState:allData,
  reducers:{
    addData: (state,action)=>{
         state.unshift(action.payload)
    },
    deleteData:(state,action)=>{
      state.splice(action.payload,1)
    },
    update:(state,action)=>{
       
       state.splice(action.payload.index,1,action.payload.ob)
    }
  }
})

export const todoAction = TodoSlice.actions;
export default TodoSlice.reducer;




