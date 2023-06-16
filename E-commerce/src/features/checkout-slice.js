import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name:   "checkout",
    initialState:{
        address:{},
        payment:{},
    },
    reducers:{
        updateAddress(state,action){
            const{paylod}=action;
            state.address ={...state.address , ...paylod}
        },
        updatePayment(state,action){
            const{payload}= action;
            state.address = {...state.payment, ...payload}
        }
    }
})


 export const {updateAddress , updatePayment} = checkoutSlice.actions;
 export default checkoutSlice.reducer;