import { configureStore } from "@reduxjs/toolkit";

import projectsReducer from "./projectsSlice";

import partnersReducer from './partnersSlice'

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    partners: partnersReducer,
  },
});

export default store;