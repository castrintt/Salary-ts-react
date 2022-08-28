import { createSlice } from "@reduxjs/toolkit";
import { IModalEditTable } from "../../interfaces/modalEditTable/ModalEditTable";

const INITIAL_STATE: IModalEditTable = {
  isOpen: false,
};

const editModalSlice = createSlice({
  name: "editModal",
  initialState: INITIAL_STATE,
  reducers: {
    openModal(state: IModalEditTable) {
      state.isOpen = true;
    },
    closeModal(state: IModalEditTable) {
      state.isOpen = false;
    },
  },
});

export default editModalSlice.reducer;
export const { openModal, closeModal } = editModalSlice.actions;
