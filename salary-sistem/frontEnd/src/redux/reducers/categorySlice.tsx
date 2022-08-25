import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/category/categoryInterfaces";
import { IListText } from "../../interfaces/category/listCategory";

const INITIAL_STATE: ICategory = {
  date: "",
  category: "",
  title: "",
  value: "",
  listOfValues: [],
};

type TPayload = PayloadAction<string>;

const categorySlice = createSlice({
  name: "salary",
  initialState: INITIAL_STATE,
  reducers: {
    categoryPicker(state, { payload }: TPayload) {
      switch (payload) {
        case "food":
          state.category = payload;
          break;
        case "rent":
          state.category = payload;
          break;
        case "salary":
          state.category = payload;
          break;
        default:
          state.category = "";
          break;
      }
    },
    datePicker(state, { payload }: TPayload) {
      state.date = payload;
    },
    titlePicker(state, { payload }: TPayload) {
      state.title = payload;
    },
    valuePicker(state, { payload }: TPayload) {
      state.value = payload;
    },
    putValuesOnList(state, { payload }: PayloadAction<IListText>) {
      state.listOfValues.push(payload);
    },
  },
});

export default categorySlice.reducer;
export const {
  categoryPicker,
  datePicker,
  titlePicker,
  valuePicker,
  putValuesOnList,
} = categorySlice.actions;
