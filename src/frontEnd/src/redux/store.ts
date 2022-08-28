import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categorySlice";
import editModalSlice from "./reducers/editModalSlice";
import loginSlice from "./reducers/loginSlice";
import registerSlice from "./reducers/registerSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    login: loginSlice,
    register: registerSlice,
    editModal: editModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export { store };
