import { createSlice } from "@reduxjs/toolkit";
import { brandData } from "../data/extraData";

const initialBrandState = brandData;

//reducers:
const selectBrand = (state, action) => {
  const id = action.payload;
  state[id].isClicked = true;
};

const changeOtherBrands = (state, action) => {
  initialBrandState
    .filter((item) => item.id !== action.payload)
    .map((id) => id.id)
    .map((id) => (state[id].isClicked = false));
};

const brandSwitchSlice = createSlice({
  name: "brand-switch-slice",
  initialState: initialBrandState,
  reducers: {
    selectBrand,
    changeOtherBrands,
  },
});

export const brandSwitchActions = brandSwitchSlice.actions;
export default brandSwitchSlice;
