import { useContext, useEffect, useState } from 'react'
import CalendarHeader from './CalendarHeader'
import { CalendarContext } from './context'
import Month from './Month'
import { getMonth } from './util'

const DatePicker = ({pickDate}) => {
  const { monthIndex, yearIndex } = useContext(CalendarContext)
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const [currentYear, setCurrentYear] = useState(null)
  
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <>
      <CalendarHeader/>
      <div>
        <Month month={currentMonth} pickDate={pickDate}/>
      </div>
    </>
  )
}

export default DatePicker
