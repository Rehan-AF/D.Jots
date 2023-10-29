import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contract: null,
};
const productsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setContract(state, action) {
      state.contract = action.payload;
    },
  },
});
export const { setContract } = productsSlice.actions;
export default productsSlice.reducer;
