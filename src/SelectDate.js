import React, { useState } from 'react'
import DatePicker from './DatePicker'
import { format } from 'date-fns'

const SelectDate = () => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState('')

  const showDateP = () => {
    setShowDatePicker(true)
  }
  const hideDateP = () => {
    setShowDatePicker(false)
  }

  const pickDate = (day) => {
    setDate(format(day, "MM/dd/yyyy"))
    hideDateP()
  }

  return (
    <>
      Date: <input type="text" onClick={showDateP} value={date} readOnly/>
      <div className='calendarWrapper'>
        {showDatePicker && <DatePicker pickDate={pickDate}/>}
      </div>
    </>
  )
}

export default SelectDate
