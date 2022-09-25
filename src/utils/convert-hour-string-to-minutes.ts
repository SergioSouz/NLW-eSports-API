// 18:00 -> 1080
// convetendo horas em minutos

export function convertHourStringToMinutes(hourString: string) {
   const [hours, minutes] = hourString.split(':').map(Number)
   const minuteAmount = (hours * 60) + minutes;
   return minuteAmount;
}