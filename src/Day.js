import { format } from 'date-fns'
import './style.css'

const Day = ({day, pickDate, rowIndex}) => {

  return (
    <div onClick={()=>pickDate(day)}>
      {rowIndex === 0 && (format(day, 'eee'))}
      <div className={`dayWrapper`}>{day.getDate()}</div>
    </div>
  )
}

export default Day
