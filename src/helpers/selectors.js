
export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(d => d.name === day);
  if (filteredDays.length === 0) {
    return [];
  }
  const newArr = [];
  for (let id of filteredDays[0].appointments) {
    newArr.push(state.appointments[id]);
  }
  return newArr;
}

export function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];
    return { ...interview, interviewer };
  }
  return null;
};


 
 
