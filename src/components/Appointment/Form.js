import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import React, { useState } from 'react';

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = function() {
    return (
      setStudent(""),
      setInterviewer(null)
    )
  }

  const cancel = function() {
    return (
      reset(),
      props.onCancel
    )
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
          /*
            This must be a controlled component
            your code goes here
          */
          />
        </form>
        <InterviewerList interviewers = {props.interviewers} interviewer = {interviewer} onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
}