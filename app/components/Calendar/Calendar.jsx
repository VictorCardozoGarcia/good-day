import styles from "./Calendar.module.css";

import { getDaysInCalendar } from "@/app/utils/getDaysInCalendar.js";
import Link from "next/link";

export default function Calendar() {
  // Get current date
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const formatedMonth = today.toLocaleString("pt-BR", {
    month: "long",
  });

  // Generate array of days in the current month
  const { prevMonthDays, monthDays, nextMonthDays } = getDaysInCalendar(
    currentYear,
    currentMonth,
  );

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <div className={styles.calendar}>
      <h1>
        {formatedMonth} de {currentYear}
      </h1>

      <div className={styles.weekdays}>
        {weekdays.map((weekday, index) => (
          <div key={index} className={styles.weekday}>
            {weekday}
          </div>
        ))}
      </div>

      <div className={styles.month}>
        {prevMonthDays.map((day, index) => (
          <div key={`prev-${index}`} className={styles.prevMonthDay}>
            {day.getDate()}
          </div>
        ))}
        {monthDays.map((day, index) =>
          day.getDate() === today.getDate() ? (
            <Link
              href="/bem-estar-estudantil"
              key={index}
              className={`${styles.monthDay} ${styles.today}`}
            >
              {day.getDate()}
            </Link>
          ) : (
            <div key={index} className={styles.monthDay}>
              {day.getDate()}
            </div>
          ),
        )}
        {nextMonthDays.map((day, index) => (
          <div key={`next-${index}`} className={styles.nextMonthDay}>
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}
