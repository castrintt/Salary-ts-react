import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegister } from "../../interfaces/register/register";

const INITIAL_STATE: IRegister = {
  userName: "",
  password: "",
  confirmPassword: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState: INITIAL_STATE,
  reducers: {
    registerUserInputs(
      state: IRegister,
      { payload }: PayloadAction<IRegister>
    ) {
      state.userName = payload.userName;
      state.password = payload.password;
      state.confirmPassword = payload.confirmPassword;
    },
    verifyPassword() {
      //regex
    },
    verifyIfUserNameIsAlreadyTaken() {},
  },
});

export default registerSlice.reducer;
export const {
  verifyPassword,
  verifyIfUserNameIsAlreadyTaken,
  registerUserInputs,
} = registerSlice.actions;
