import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../userData"; // it is an array of objects

const userSlice = createSlice({
  name: "users",
  initialState: userData,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uU = state.find((dd) => dd.id == id);
      if (uU) {
        uU.name = name;
        uU.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uU = state.find((f) => f.id == id);
      if (uU) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
