// https://date-fns.org/docs/Getting-Started for all functions

export const getMonth = (month = new Date().getMonth()) => {
  const date = new Date()
  const year = date.getFullYear()
  const firstDayOfMonth = new Date(year, month, 1).getDay()
  //days before first day (negative numbers)
  let dayCount = 0 - firstDayOfMonth


  //Day matrix
  const days = new Array(5).fill([]).map(()=>{ //rows
    return new Array(7).fill(null).map(()=>{ //columns
      dayCount++
      return new Date(year, month, dayCount)
    })
  })

  return days
}

export const getYears = () => {
  const date = new Date()
  const minYear = date.getFullYear() - 20
  const maxYear = date.getFullYear() + 20

  let years = []

  for(let y = minYear; y < maxYear; y++){
    years.push(y)
  }

  return years
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
