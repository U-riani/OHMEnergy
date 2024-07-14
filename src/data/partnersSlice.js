import { createSlice } from "@reduxjs/toolkit";

import Partner11 from "../images/partners/partner-11";

const initialState = [
  {
    name: "SMA Solar Technology AG",
    logo: require("../images/partners/partner-1.png"),
    paragraph:
      "Driven by both innovations in technology and an effective brand strategy, AE Solar continuously extends the industry chain upstream and successfully executes the downstream projects in the international energy market. AE Solar brand has become synonymous with high performing, top-quality photovoltaic modules and has specialized in PV technology innovation, application, and system development.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "Solar Technologies, Inc.",
    logo: require("../images/partners/partner-2.png"),
    paragraph:
      "As a leading global specialist in photovoltaic system technology, SMA is setting the standards today for the decentralized, digital and renewable energy supply of tomorrow. SMA innovative solutions for every type of photovoltaic application offer people and companies worldwide greater independence in meeting their energy needs. In collaboration with partners and customers, SMA are helping people transition to a self-sufficient, decentralized and renewable energy supply.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "KACO new energy GmbH",
    logo: require("../images/partners/partner-3.png"),
    paragraph:
      "KACO new energy with dedication and a passion for research, stands for high quality engineering skills in the field of independent and decentralised energy supply. KACO inverters are designed to support the use of renewable energies as well as efficient energy management throughout the world. KACO implement projects with quality and commitment, and develop our “made in Germany” products continuously.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "Jäspi Solar",
    logo: require("../images/partners/partner-4.png"),
    paragraph:
      "As a leading global specialist in photovoltaic system technology, SMA is setting the standards today for the decentralized, digital and renewable energy supply of tomorrow. SMA innovative solutions for every type of photovoltaic application offer people and companies worldwide greater independence in meeting their energy needs. In collaboration with partners and customers, SMA are helping people transition to a self-sufficient, decentralized and renewable energy supply.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "UAB Solet Technics",
    logo: require("../images/partners/partner-5.png"),
    paragraph:
      "As a leading global specialist in photovoltaic system technology, SMA is setting the standards today for the decentralized, digital and renewable energy supply of tomorrow. SMA innovative solutions for every type of photovoltaic application offer people and companies worldwide greater independence in meeting their energy needs. In collaboration with partners and customers, SMA are helping people transition to a self-sufficient, decentralized and renewable energy supply.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "Stäubli International AG",
    logo: require("../images/partners/partner-6.png"),
    paragraph:
      "Stäubli is a mechatronics solutions provider with three core activities: Connectors, Robotics and Textile. Stäubli is an international group that currently operates in 29 countries, with agents in 50 countries on four continents. Global workforce of 5,500 shares a commitment to partnering with customers in nearly every industry to provide comprehensive solutions with longterm support.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "Weidmüller Interface GmbH & Co. KG",
    logo: require("../images/partners/partner-7.png"),
    paragraph:
      "Be it automobile manufacturing, electricity production or water management - hardly any of today’s industries can do without electronics and electrical connectivity. In this internationalised, technologically changing world, the complexity of requirements is rapidly increasing due to the emergence of new markets. New, more varied challenges have to be overcome, and the solutions to them will not be found in high-tech products alone. Connectivity is the key, whether it involves power, signals and data, demands and solutions or theory and practice.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "ESSD (Energy Saving Solutions & Design)",
    logo: require("../images/partners/partner-8.png"),
    paragraph:
      "Be it automobile manufacturing, electricity production or water management - hardly any of today’s industries can do without electronics and electrical connectivity. In this internationalised, technologically changing world, the complexity of requirements is rapidly increasing due to the emergence of new markets. New, more varied challenges have to be overcome, and the solutions to them will not be found in high-tech products alone. Connectivity is the key, whether it involves power, signals and data, demands and solutions or theory and practice.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "ESSD (Energy Saving Solutions & Design)",
    logo: require("../images/partners/partner-9.png"),
    paragraph:
      "As a leading global specialist in photovoltaic system technology, SMA is setting the standards today for the decentralized, digital and renewable energy supply of tomorrow. SMA innovative solutions for every type of photovoltaic application offer people and companies worldwide greater independence in meeting their energy needs. In collaboration with partners and customers, SMA are helping people transition to a self-sufficient, decentralized and renewable energy supply.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "ESSD (Energy Saving Solutions & Design)",
    logo: require("../images/partners/partner-10.png"),
    paragraph:
      'ESSD is the official representative of the Russian company "STN" in Armenia, which offers heating systems and devices for home, office and industrial purposes. The company supplies the Russian market, the CIS countries, Europe and South America. The production facilities of the company are equipped with the most modern equipment.',
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "AEG",
    logo: Partner11,
    paragraph:
      "As a leading global specialist in photovoltaic system technology, SMA is setting the standards today for the decentralized, digital and renewable energy supply of tomorrow. SMA innovative solutions for every type of photovoltaic application offer people and companies worldwide greater independence in meeting their energy needs. In collaboration with partners and customers, SMA are helping people transition to a self-sufficient, decentralized and renewable energy supply.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "ESSD (Energy Saving Solutions & Design)",
    logo: require("../images/partners/partner-12.png"),
    paragraph:
      "As a leading global specialist in photovoltaic system technology, SMA is setting the standards today for the decentralized, digital and renewable energy supply of tomorrow. SMA innovative solutions for every type of photovoltaic application offer people and companies worldwide greater independence in meeting their energy needs. In collaboration with partners and customers, SMA are helping people transition to a self-sufficient, decentralized and renewable energy supply.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
  {
    name: "ESSD (Energy Saving Solutions & Design)",
    logo: require("../images/partners/partner-13.png"),
    paragraph:
      "As a leading global specialist in photovoltaic system technology, SMA is setting the standards today for the decentralized, digital and renewable energy supply of tomorrow. SMA innovative solutions for every type of photovoltaic application offer people and companies worldwide greater independence in meeting their energy needs. In collaboration with partners and customers, SMA are helping people transition to a self-sufficient, decentralized and renewable energy supply.",
    flag: require("../images/flags/germany-flag-icon.png"),
  },
];

export const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    getAllPartners: (state) => {
      return state;
    },
  },
});

export const { getAllPartners } = partnersSlice.actions;

export default partnersSlice.reducer;
