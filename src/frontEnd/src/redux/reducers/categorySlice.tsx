import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/category/categoryInterfaces";
import { IListText } from "../../interfaces/category/listCategory";
import { IReplaceTableValues } from "../../interfaces/replaceTableValues/replaceTableValues";

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
    datePicker(state: ICategory, { payload }: TPayload) {
      state.date = payload;
    },
    titlePicker(state: ICategory, { payload }: TPayload) {
      state.title = payload;
    },
    valuePicker(state: ICategory, { payload }: TPayload) {
      state.value = payload;
    },
    putValuesOnList(state: ICategory, { payload }: PayloadAction<IListText>) {
      state.listOfValues.push(payload);
    },
    replaceValue(
      state: ICategory,
      { payload }: PayloadAction<IReplaceTableValues>
    ) {
      state.listOfValues.map((values: IListText, index: number) => {
        if (index === payload.index) {
          values.value = payload.value;
          values.title = payload.title;
          values.category = payload.category;
          values.date = payload.date;
        }
        return values;
      });
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
  replaceValue,
} = categorySlice.actions;
