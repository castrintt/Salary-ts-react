import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../../interfaces/login/login";

const INITIAL_STATE: ILogin = {
  userName: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: INITIAL_STATE,
  reducers: {
    loginInputFields(state: ILogin, { payload }: PayloadAction<ILogin>) {
      state.userName = payload.userName;
      state.password = payload.password;
    },
    doLogin() {},
    verifyLogin() {},
  },
});

export default loginSlice.reducer;
export const { doLogin, verifyLogin, loginInputFields } = loginSlice.actions;
