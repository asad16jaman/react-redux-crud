import { createSlice } from "@reduxjs/toolkit";


const FormView = createSlice({
    name:'updateForm',
    initialState:{
        toggleForm:false,
        updateData:{name:"",age:null,gander:''},
        updateIndex:undefined
    },
    reducers:{
        viewupdateForm : (state,action)=>{
           state = {
            toggleForm:true,
            updateData:action.payload.ob,
            updateIndex:action.payload.index
           }
           return state
        },
        viewinsertForm : (state)=>{
            state.toggleForm = false
            state.updateData = {name:"",age:null,gander:''}
            state.updateIndex = undefined
        }
    }

});



export const formAction = FormView.actions;
export default FormView.reducer;
