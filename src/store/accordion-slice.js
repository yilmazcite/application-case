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
    return;
  }

  initialAccordionState
    .filter((item) => item.id !== action.payload)
    .map((id) => id.id)
    .map((id) => (state[id].isClicked = false));
};

const updateSubMenuItems = (state, action) => {
  const mainId = action.payload.mainId;
  const subId = action.payload.subId;

  state[mainId].menuSubTitles.map((item) => {
    return item.id === subId && item.menuItemIsClicked === false
      ? (item.menuItemIsClicked = true)
      : item.id !== subId && item.menuItemIsClicked === true
      ? (item.menuItemIsClicked = false)
      : undefined;
  });
};

const updateNotifications = (state, action) => {
  state[0].notifications = action.payload;
};

const accordionSlice = createSlice({
  name: "accordion-slice",
  initialState: initialAccordionState,
  reducers: {
    selectMenuItem,
    updateMenuItems,
    updateSubMenuItems,
    updateNotifications,
  },
});

export const accordionActions = accordionSlice.actions;
export default accordionSlice;
