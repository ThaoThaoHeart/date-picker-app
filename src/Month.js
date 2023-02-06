import React from "react"
import Day from "./Day"
import './style.css'

const Month = ({month, pickDate}) => {
  return (
    <div className='monthWrapper'>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, index) => (
            <Day day={day} rowIndex={i} pickDate={pickDate} key={index}/>
            ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Month
