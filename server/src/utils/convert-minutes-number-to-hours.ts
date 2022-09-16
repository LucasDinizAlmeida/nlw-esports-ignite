

export function convertMinutesNumberToHours(minutesAmount: number) {

  const hour = Math.floor(minutesAmount / 60)
  const min = minutesAmount % 60

  return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`
}