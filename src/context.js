import { createContext } from "react"

export const CalendarContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  yearIndex: 0,
  setYearIndex: (index) => {}
})