import React from "react";

const TableComponent = ({ project }) => {
  return (
    <div className="table">
      <div className="inner-table">
        <div className="table-row table-row-1">
          <div className="thead"><h6>{project.name}</h6></div>
          <div className="tbody">{project.description}</div>
        </div>
        <div className="table-row">
          <div className="thead"><h6>{project.name}</h6></div>
          <div className="tbody">{project.description}</div>
        </div>
        <div className="table-row">
          <div className="thead"><h6>{project.name}</h6></div>
          <div className="tbody">dssfsdfsd  fds dsf sdf dsf dsf ds ds fds fsd fdsgfds gsdfdsgfds</div>
        </div>
        <div className="table-row">
          <div className="thead"><h6>{project.name}</h6></div>
          <div className="tbody">{project.description}</div>
        </div>
        <div className="table-row">
          <div className="thead"><h6>{project.name}</h6></div>
          <div className="tbody">{project.description}</div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
