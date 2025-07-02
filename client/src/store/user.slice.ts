import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string | null;
  email: string | null;
  fullName: string | null;
};

const initialState: User = {
  id: "1234567890",
  email: "some@email.com",
  fullName: "Batman PlaceHolder",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
    },
    removeUser: () => {
      return {
        id: null,
        email: null,
        fullName: null,
      };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
