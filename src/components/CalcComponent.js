import React from 'react'

const CalcComponent = () => {
  return (
    <div className='calcComponent-container'>
        <p>Charge per 1 kWh of electricity: GEL</p>
        <p>Installed power of the plant in kilowatts: kWh.</p>
        <p>Monthly electricity consumption in kW*hour: kW*h</p>
        <p>Required area: sq. m</p>
        <p className='m-0'>Project cost: $</p>
    </div>
  )
}

export default CalcComponent