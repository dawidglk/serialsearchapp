const dayOfWeekSort = (day, array) => {
  if (array) {
    return day !== undefined && day !== ""
      ? array.filter(({ show }) => show.schedule.days.includes(day))
      : array;
  }
};

export default dayOfWeekSort;
