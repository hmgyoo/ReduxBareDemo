import { createSlice } from '@reduxjs/toolkit'

export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    value: 'test@email.com',
    surname: 'dfadfa'
  },
  reducers: {
    changeName: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { changeName } = emailSlice.actions

export const selectName = (state) => state.email.value
export const surname = (state) => state.surname.value

export default emailSlice.reducer
