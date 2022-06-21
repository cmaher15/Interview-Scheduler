import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function updateSpots(state, appointments) {
    const dayObj = state.days.find((d) => d.name === state.day);
    let spots = 0;
    for (const id of dayObj.appointments) {
      console.log("id", id)
      const appointment = appointments[id];
      console.log("appointment", appointment)
      if (!appointment.interview) {
        spots++;
      }
    }
    const newDay = { ...dayObj, spots };
    const days = state.days.map((d) => (d.name === state.day ? newDay : d));

    return days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`api/appointments/${id}`, { interview }).then(() => {
      const days = updateSpots(state, appointments);
      setState((prev) => ({ ...state, appointments, days }));
    });
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`api/appointments/${id}`).then(() => {
      const days = updateSpots(state, appointments);
      setState((prev) => ({ ...state, appointments, days }));
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`api/appointments`),
      axios.get(`api/interviewers`),
    ]).then((all) => {
      console.log(all);
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
    updateSpots
  };
}
