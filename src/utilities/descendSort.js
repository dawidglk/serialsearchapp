const descendSort = (array) =>
  array.sort((a, b) => Number(b.score) - Number(a.score));

export default descendSort;
