import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contract: null,
  account: null,
};
const productsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setContract(state, action) {
      state.contract = action.payload;
    },
    setAccount(state, action) {
      state.account = action.payload;
    },
  },
});
export const { setContract, setAccount } = productsSlice.actions;
export default productsSlice.reducer;
