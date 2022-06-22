import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => {
        console.log("error", error);
        transition(ERROR_SAVE, true);
      });
  }

  function deleteApp(interview) {
    transition(DELETING, true);
    props
      .cancelInterview(props.id, interview)
      .then(() => transition(EMPTY))
      .catch((error) => {
        console.log("error", error);
        transition(ERROR_DELETE, true);
      });
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}

      {mode === CONFIRM && <Confirm onConfirm={deleteApp} onCancel={back} />}

      {mode === CREATE && (
        <Form
          student={null}
          interview={null}
          interviewers={props.interviewers}
          onCancel={back}
          save={save}
        />
      )}

      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          save={save}
        />
      )}

      {mode === SAVING && <Status message={"Saving..."} />}

      {mode === DELETING && <Status message={"Deleting..."} />}

      {mode === ERROR_SAVE && (
        <Error
          message={"There was an error updating your request."}
          onClose={back}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error
          message={"There was an error deleting your request."}
          onClose={back}
        />
      )}

    </article>
  );
}
