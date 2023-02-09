import styled from "styled-components";
import { useState } from "react";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentMonth } from "../../redux/slices/playerSlice";
import { ReactComponent as LeftChevron } from "../../assets/left-chevron.svg";
import { ReactComponent as RightChevron } from "../../assets/right-chevron.svg";
import { MonthCalendar } from "./MonthCalendar";
import { Popover } from "react-tiny-popover";

const DateChanger = () => {
  const dispatch = useAppDispatch();
  const currentMonth = useAppSelector((state) => state.player.currentMonth);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleTogglePopover = () => setIsPopoverOpen(!isPopoverOpen);

  const handleDateChange = (value: Date) => {
    const newMonthMoment = moment(value).toString();
    dispatch(setCurrentMonth(newMonthMoment));
  };

  const handlePrevMonth = () => {
    const prevMonth = moment(currentMonth).add(-1, "month");
    dispatch(setCurrentMonth(prevMonth.toString()));
  };

  const handleNextMonth = () => {
    const nextMonth = moment(currentMonth).add(1, "month");
    dispatch(setCurrentMonth(nextMonth.toString()));
  };

  return (
    <Container>
      <Popover
        isOpen={isPopoverOpen}
        onClickOutside={handleTogglePopover}
        positions={["bottom"]} // preferred positions by priority
        content={
          <MonthCalendar
            startMonth={moment(currentMonth)}
            handleChange={handleDateChange}
          />
        }
      >
        <TextContainer>
          <ChevronContainer onClick={handlePrevMonth}>
            <LeftChevron height={36} width={36} fill={"lightgrey"} />
          </ChevronContainer>

          <DateText onClick={handleTogglePopover}>
            {moment(currentMonth).format("MMMM YYYY")}
          </DateText>

          <ChevronContainer onClick={handleNextMonth}>
            <RightChevron height={36} width={36} fill={"lightgrey"} />
          </ChevronContainer>
        </TextContainer>
      </Popover>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  /*
    Introduced in Internet Explorer 10.
    See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
  */
  -ms-user-select: none;
  user-select: none;
`;

const DateText = styled.h2`
  padding: 0px 12px;
  font-size: 28px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  width: 240px;
  text-align: center;
`;

const ChevronContainer = styled.div`
  margin-top: 4px;
  cursor: pointer;
  &:hover {
    path {
      fill: blue;
    }
  }
`;

export { DateChanger };
