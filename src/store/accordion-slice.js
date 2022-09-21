import { createSlice } from "@reduxjs/toolkit";
import { accordionData } from "../data/extraData";

const initialAccordionState = accordionData;

//reducers:
const selectMenuItem = (state, action) => {
  if (action.payload === 0) {
    initialAccordionState
      .filter((item) => item.id !== action.payload)
      .map((id) => id.id)
      .map((id) => (state[id].isClicked = false));
    //disable the notification item
    return;
  }
  if (state[action.payload].isClicked === true) {
    state[action.payload].isClicked = false;
    return;
  }
  state[action.payload].isClicked = true;
};

const updateMenuItems = (state, action) => {
  if (action.payload === 0) {
    //disable the notification item
    return;
  }

  initialAccordionState
    .filter((item) => item.id !== action.payload)
    .map((id) => id.id)
    .map((id) => (state[id].isClicked = false));
};

const accordionSlice = createSlice({
  name: "accordion-slice",
  initialState: initialAccordionState,
  reducers: {
    selectMenuItem,
    updateMenuItems,
  },
});

export const accordionActions = accordionSlice.actions;
export default accordionSlice;
