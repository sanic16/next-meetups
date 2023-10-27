import { useRef } from "react";
import { months } from "@/dummy-data";
import Button from "../ui/button";

import classes from "./events-search.module.css";

type Props = {
    onSearch: (year: string, month: string) => void
};

const EventsSearch = (props: Props) => {

  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current?.value
    const selectedMonth = monthInputRef.current?.value

    props.onSearch(selectedYear!, selectedMonth!)

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
