// Function to generate an array of days in the calendar
export function getDaysInCalendar(year, month) {
  const date = new Date(year, month, 1);
  const monthStartWeekday = date.getDay();

  // Calculate the first day of the previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const prevMonthDay = prevMonthLastDay - ((monthStartWeekday - 1) % 7);

  // Fill in the days from the previous month
  const prevMonthDays = [];
  for (let i = prevMonthDay; i <= prevMonthLastDay; i++) {
    prevMonthDays.push(new Date(year, month - 1, i));
  }

  // Fill in the days of the current month
  const monthDays = [];
  while (date.getMonth() === month) {
    monthDays.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  // Fill in the days of the next month until the end of the week
  const nextMonthDays = [];
  while (date.getDay() > 0) {
    nextMonthDays.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  // Concatenate all arrays and return
  return { prevMonthDays, monthDays, nextMonthDays };
}
