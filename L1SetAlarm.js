function setAlarm(employed, vacation) {
  return employed == true && vacation == false ? true : false;
}
console.log(setAlarm(true, false));

//Better
const setAlarm = (employed, vacation) => employed && !vacation;
