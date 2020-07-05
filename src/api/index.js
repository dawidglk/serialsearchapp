const fetchData = async (name) => {
  const response = await fetch(`http://api.tvmaze.com/search/shows?q=${name}`);
  return await response.json();
};

export default fetchData;
