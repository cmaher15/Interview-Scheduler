import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  let interviewClass = classNames(" interviewers__item", {
    " interviewers__item--selected": props.selected
  });

  const RenderName = () => {
    if (props.selected) {
      return (
        props.name
      );
    } else {
      return <li></li>
    }
  };

return (
  <li className={interviewClass}
  onClick={() => props.setInterviewer(props.id)}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    < RenderName />
  </li>
);
}