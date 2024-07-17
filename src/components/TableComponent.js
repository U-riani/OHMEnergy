import React from "react";

const TableComponent = ({ project }) => {
  return (
    <div className="table">
      <div className="inner-table">
        <div className="table-row table-row-1">
          <div className="thead"><h6>Capicity:</h6></div>
          <div className="tbody">{project.capacity}</div>
        </div>
        <div className="table-row">
          <div className="thead"><h6>Location:</h6></div>
          <div className="tbody">{project.location}</div>
        </div>
        <div className="table-row">
          <div className="thead"><h6>Solar Modules:</h6></div>
          <div className="tbody">{project.solarModules}</div>
        </div>
        <div className="table-row">
          <div className="thead"><h6>Inverter:</h6></div>
          <div className="tbody">{project.inverter}</div>
        </div>
        <div className="table-row">
          <div className="thead"><h6>Annual electricity production։</h6></div>
          <div className="tbody">{project.annualElectricityProduction}</div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
