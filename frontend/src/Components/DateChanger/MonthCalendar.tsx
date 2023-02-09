import { Moment } from "moment";
import { Popover } from "react-tiny-popover";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { MouseEvent } from "react";

interface MonthCalendarProps {
  startMonth: Moment;
  handleChange: any;
}

const MonthCalendar = ({ startMonth, handleChange }: MonthCalendarProps) => {
  const [value, setValue] = useState(startMonth.toDate());
  const handleClickMonth = (value: Date, event: MouseEvent<HTMLButtonElement>) => {
    setValue(value);
    handleChange(value);
  };

  return (
    <CalendarContainer>
      <Calendar view='year' onClickMonth={handleClickMonth} value={value} />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`

.react-calendar { width: 300px;
  border-radius: 4px;
  .react-calendar__navigation {
      width: fit-content;
      margin:auto;
      margin-bottom: 10px;
      .react-calendar__navigation__prev2-button,
      .react-calendar__navigation__next2-button {
        display: none;  
      }
  
      .react-calendar__navigation__label {
          font-size: 18px;
          padding-top: 4px;
          width: 120px;
          flex-grow-unset;
           pointer-events: none;
          &:hover {
            background: none;
          }
      }
  
  }
  
  .react-calendar__tile {
      height: 70px;
  }
  
  .react-calendar__month-view__weekdays__weekday {
      font-size: 16px;
      color: rgb(15, 70, 15);
  }
  
  .react-calendar__tile--active {
      background: #e70220;
      color: white;
  }
  
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
      background: #e70220;
  }
  
  .react-calendar__tile,
  .react-calendar__month-view__days__day {
      height: 30px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        color: white;
        background: blue;
      }
  }

  .react-calendar__tile--now ,
  .react-calendar__tile--hasActive {
    color: white;
    font-weight: 900;
  }

  .react-calendar__tile--now {
    background: darkorange;
  }
  .react-calendar__tile--hasActive {
    background: blue;
  }
`;

export { MonthCalendar };
