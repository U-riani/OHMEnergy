import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: `"Sun Energy" LLC, Armavir Province, Merdzavan village"`,
    kw: '3000 kw',
    capacity: '3000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description:
      "lorem  dsvdsv dvdsv dsvdsvdsvdsv dsvdsvdsv vds dsvds vdsvds vdsv vdsv dsvdsv vdsvdsvdsv dvdlvdmvldsmvdsvdsv dvds vdsv dsvds vdsv ds vds vdsvdsvdsvdvipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: `"Solar Farm" LLC, Gegharkunik Province, Shoghakat village`,
    kw: '123000 kw',
    capacity: '3000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description: "lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: `"Module Sun" LLC, Gegharkunik Province, Mets Masrik village`,
    kw: '3400 kw',
    capacity: '56000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description: "lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: `"G.Solar" LLC, Aragacotn Province, Karmrashen village`,
    kw: '46000 kw',
    capacity: '2500 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description: "lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-1.jpg"),
  },
  {
    name: "Yerevan, Davtashen",
    kw: '3000 kw',
    capacity: '3000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description: "other lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-2 comercial",
    kw: '3000 kw',
    capacity: '3000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description: "other lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-2 comercial",
    kw: '3000 kw',
    capacity: '3000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description: "other lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-2 comercial",
    kw: '3000 kw',
    capacity: '3000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description: "other lorem ipsum",
    type: "comercial",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-3",
    kw: '3000 kw',
    capacity: '3000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
    description: "cdscdscdfdsfother lorem ipsum",
    type: "large scale",
    imageSrc: require("../images/projects/project-2.jpg"),
  },
  {
    name: "project-4",
    kw: '3000 kw',
    capacity: '3000 kw',
    location: "Merdzavan, Armavir Province",
    solarModules: 'AE SOLAR 450 W, monocrystalline 6820 pcs, Germany',
    inverter: "Huawei 100 kW inverter, 30 pcs.",
    annualElectricityProduction: '5550 MWh',
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
