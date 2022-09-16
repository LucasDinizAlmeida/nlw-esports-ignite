

export function convertHourStringToMinutes(hours: string) {
  const [hour, min] = hours.split(':').map(Number)

  const minutesAmount = (hour * 60) + min

  return minutesAmount
}