import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "project-1",
    description: "lorem ipsum",
  },
  {
    name: "project-2",
    description: "other lorem ipsum",
  },
  {
    name: "project-3",
    description: "cdscdscdfdsfother lorem ipsum",
  },
  {
    name: "project-4",
    description: "cvdsvd dsvdsvother lorem ipsum",
  },
  {
    name: "project-5",
    description: "cvdsvd dsvdsvother lorem ipsum",
  },
  {
    name: "project-6",
    description: "cvdsvd dsvdsvother lorem ipsum",
  },
  {
    name: "project-7",
    description: "cvdsvd dsvdsvother lorem ipsum",
  },
  {
    name: "project-8",
    description: "cvdsvd dsvdsvother lorem ipsum",
  },
  {
    name: "project-9",
    description: "cvdsvd dsvdsvother lorem ipsum",
  },
  {
    name: "project-10",
    description: "cvdsvd dsvdsvother lorem ipsum",
  },
];


export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    getAllProjects: (state) => {
      return state;
    },
  },
});



export const { getAllProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
