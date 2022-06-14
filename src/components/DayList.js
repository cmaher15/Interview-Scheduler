import React from "react";
import "components/DayListItem.scss";
import DayListItem from "./DayListItem";



export default function DayList(props) {
  const days = props.days;
  const mapDays = days.map((day) =>
    <DayListItem key={day.id} name={day.name} spots={day.spots}/>
  );
  return <u>{mapDays}</u>;
}
