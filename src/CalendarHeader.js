
import { useContext } from 'react'
import { CalendarContext } from './context'
import { format } from 'date-fns'
import dayjs from 'dayjs'
import './style.css'
import { getYears, months } from './util'

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex, yearIndex, setYearIndex } = useContext(CalendarContext)

  const years = getYears()
  const prevMonth = () => {
    setMonthIndex(monthIndex - 1)
    document.getElementById('month').value = monthIndex
  }
  const nextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }

  const changeMonth = (chosenMonth) => {
    monthIndex = chosenMonth
    setMonthIndex(monthIndex)
  }

  const changeYear = () => {

  }

  return (
    <div>
      <button onClick={prevMonth}>Prev</button>
      {/* {format(new Date(dayjs().year(), monthIndex), 'MMMM yyyy')} */}
      <select name="month" id="month" defaultValue={monthIndex}>
        {months.map((month, index) => {
          if(index==dayjs().month()){
            return <option selected value={month} key={index}>{month}</option>
          } else {
            return <option value={month} key={index}>{month}</option>
          }
          })}
      </select>
      <select name="year" id="year">
        {years.map((year, index) => {
          if(year==dayjs().year()){
            return <option selected value={year} key={index}>{year}</option>
          } else {
            return <option value={year} key={index}>{year}</option>
          }
          })}
      </select>
      <button onClick={nextMonth}>Next</button>
    </div>
  )
}

export default CalendarHeader
