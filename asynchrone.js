const filterData = (planetsList, search) => {
  planetsList.filter((planet) => {
    if (planet.name.includes(search)) {
      return true;
    } else {
      return false;
    }
  });
};

const getData = async () => {
  let response = await fetch("https://swapi-api.hbtn.io/api/planets/");
  console.log(response);
  const results = await response.json();
};

getData();
