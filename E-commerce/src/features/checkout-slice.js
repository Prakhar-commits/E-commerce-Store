import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name:   "checkout",
    initialState:{
        address:{}
    },
    reducers:{
        updateAddress(state,action){
            const{paylod}=action;
            state.address ={...state.address , ...paylod}
        }
    }
})


 export const {} = checkoutSlice.actions;
 export default checkoutSlice.reducer;