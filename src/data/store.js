import { configureStore } from "@reduxjs/toolkit";
import { projectsSlice } from "./projectsSlice";
import projectsReducer from "./projectsSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;