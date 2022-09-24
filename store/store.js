import { configureStore } from "@reduxjs/toolkit";

import brandSwitchSlice from "./brand-switch-slice";
import accordionSlice from "./accordion-slice";

export const store = configureStore({
  reducer: {
    brandSwitchSlice: brandSwitchSlice.reducer,
    accordionSlice: accordionSlice.reducer,
  },
});
