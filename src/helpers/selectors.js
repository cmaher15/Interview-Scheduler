
export function getAppointmentsForDay(state, day) {
  console.log("state", state)
  const filteredDays = state.days.filter(d => d.name === day);
  if (filteredDays.length === 0){
    return [];
  }
  const newArr = [];
  for (let id of filteredDays[0].appointments) {
   newArr.push(state.appointments[id])
  }
  return newArr;
}