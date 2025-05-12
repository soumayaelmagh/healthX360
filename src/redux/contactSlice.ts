// src/slices/counterSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ContactState {
  fullname: string,
  email: string,
  message: string,
  phone: string
}

const initialState: ContactState = {
    fullname: "",
    email: "",
    message: "",
    phone: ""
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    //@ts-ignore
    updateContact: (state, action:PayloadAction<{ type: string, payload: string }>) => {
        const { type, payload } = action.payload;
        switch (action.payload?.type) {
            case "fname": 
                state.fullname = payload
                break;
            case "email": 
                state.email = payload
                break;
            case "phone": 
                state.phone = payload
                break;
            case "message": 
                state.message = payload
                break;
            default:
                return null
                break;
        }
    }
  },
});

export const { updateContact } = contactSlice.actions;
export default contactSlice.reducer;
