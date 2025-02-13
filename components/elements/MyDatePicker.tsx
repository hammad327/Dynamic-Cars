"use client"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function MyDatePicker({ onChange, form }: { onChange: (date: string | null) => void, form?: boolean }) {
  const now = new Date()
  const minSelectableTime = new Date(now.getTime() + 1 * 60 * 60 * 1000) // Add 2 hours to current time

  const [startDate, setStartDate] = useState<Date | null>(minSelectableTime)

  const handleDateChange = (date: Date | null) => {
    setStartDate(date)
    onChange(date ? date.toISOString() : null) // Pass the date to parent in ISO format
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      className={!form ? "search-input datepicker" : "form-control calendar-date"}
      showTimeSelect
      dateFormat="yyyy-MM-dd HH:mm"
      minDate={now} // Block previous dates
      minTime={startDate?.getDate() === now.getDate() ? minSelectableTime : new Date(0, 0, 0, 0, 0)} // If same day, block next 2 hours
      maxTime={new Date(0, 0, 0, 23, 59)} // Set max time to 23:59
    />
  )
}
