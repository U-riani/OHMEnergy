import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "project-1",
    description:
      "lorem  dsvdsv dvdsv dsvdsvdsvdsv dsvdsvdsv vds dsvds vdsvds vdsv vdsv dsvdsv vdsvdsvdsv dvdlvdmvldsmvdsvdsv dvds vdsv dsvds vdsv ds vds vdsvdsvdsvdvipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "project-1",
    description: "lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "project-1",
    description: "lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "project-1",
    description: "lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "project-2 comercial",
    description: "other lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-2 comercial",
    description: "other lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-2 comercial",
    description: "other lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-2 comercial",
    description: "other lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-3",
    description: "cdscdscdfdsfother lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-4",
    description: "cvdsvd dsvdsvother lorem ipsum",
    type: "residential",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "project-5",
    description: "cvdsvd dsvdsvother lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-6",
    description: "cvdsvd dsvdsvother lorem ipsum",
    type: "residential",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "project-7",
    description: "cvdsvd dsvdsvother lorem ipsum",
    type: "residential",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-8",
    description: "cvdsvd dsvdsvother lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "project-9",
    description: "cvdsvd dsvdsvother lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "project-10",
    description: "cvdsvd dsvdsvother lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
];

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    getAllProjects: (state) => {
      return state;
    },
    getTypeProjects: (state, action) => {
      console.log(action.payload);
      return state.filter((project) => project.type === action.payload);
    },
    getLargeScaleProjects: (state) => {
      return state.filter((project) => project.type === "large scale");
    },
    getComercialProjects: (state) => {
      return state.filter((project) => project.type === "comercial");
    },
  },
});

export const {
  getAllProjects,
  getTypeProjects,
  getLargeScaleProjects,
  getComercialProjects,
} = projectsSlice.actions;

export default projectsSlice.reducer;
