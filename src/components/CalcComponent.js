import React from "react";

const CalcComponent = ({ radioValue }) => {

  
  const forPerson = (
    <div>
      {" "}
      <h2>for Person</h2>
      <p>Charge per 1 kWh of electricity: GEL</p>
      <p>Installed power of the plant in kilowatts: kWh.</p>
      <p>Monthly electricity consumption in kW*hour: kW*h</p>
      <p>Required area: sq. m</p>
      <p className="m-0">Project cost: $</p>
    </div>
  );
  
  const forCompany = (
    <div>
      {" "}
      <h2>for company</h2>
      <p>Charge per 1 kWh of electricity: GEL</p>
      <p>Installed power of the plant in kilowatts: kWh.</p>
      <p>Monthly electricity consumption in kW*hour: kW*h</p>
      <p>Required area: sq. m</p>
      <p className="m-0">Project cost: $</p>
    </div>
  );

  // console.log(radioValue);
  return (
    <div className="calcComponent-container">
     {radioValue === '1' ? forPerson : forCompany}
    </div>
  );
};

export default CalcComponent;
