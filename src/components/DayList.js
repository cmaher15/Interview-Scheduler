import React from "react";
import "components/DayListItem.scss";
import "components/DayListItem";
import classNames from "classnames";


export default function DayList(props) {
  const days = props.days;
  const mapDays = days.map((day) => 
   <ul key={day.id}>{day.name}</ul>
  );
  return <u>{mapDays}</u>;
}
