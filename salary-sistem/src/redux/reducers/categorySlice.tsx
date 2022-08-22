import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/category/categoryInterfaces";

const INITIAL_STATE: ICategory = {
  date: "",
  category: "",
  title: "",
  value: "",
};

const categorySlice = createSlice({
  name: "salary",
  initialState: INITIAL_STATE,
  reducers: {
    food(state, { payload }: PayloadAction<string>) {
      state.category = "food";
    },
    rent(state, { payload }: PayloadAction<string>) {
      state.category = "rent";
    },
    salary(state, { payload }: PayloadAction<string>) {
      state.category = "salary";
    },
  },
});

export default categorySlice.reducer;
export const { food, rent, salary } = categorySlice.actions;
