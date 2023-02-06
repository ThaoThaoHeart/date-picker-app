import { useState } from "react"
import { CalendarContext } from "./context"

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth())

  return (
    <CalendarContext.Provider value={{monthIndex, setMonthIndex}}>
      {props.children}
    </CalendarContext.Provider>
  )
}

export default ContextWrapper
