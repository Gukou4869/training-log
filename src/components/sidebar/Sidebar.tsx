import * as React from 'react';
import CreateEventButton from '../button/createEvent/CreateEventButton';
import SmallCalendar from '../calender/small/SmallCalendar';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  currentDayIdx: number;
  currentMonthIdx: number;
  month: Array<any>;
  selectedDay: number;
  handleMoveToNextMonth: () => void;
  handleMoveToPrevMonth: () => void;
  handleSetDay: (day: any, monthIdx: number) => void;
}

const Sidebar: React.VFC<SidebarProps> = ({
  currentDayIdx,
  currentMonthIdx,
  month,
  selectedDay,
  handleMoveToNextMonth,
  handleMoveToPrevMonth,
  handleSetDay,
}) => {
  return (
    <aside className={styles.sidebar}>
      <CreateEventButton />
      <SmallCalendar
        currentDayIdx={currentDayIdx}
        currentMonthIdx={currentMonthIdx}
        month={month}
        selectedDay={selectedDay}
        handleMoveToNextMonth={handleMoveToNextMonth}
        handleMoveToPrevMonth={handleMoveToPrevMonth}
        handleSetDay={handleSetDay}
      />
    </aside>
  );
};

export default Sidebar;