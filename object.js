let person = {
  name: "toto",
  address: {
    city: "New York",
    cp: "74585",
    number: 15,
  },
  likedMovies: ["Le seigneur des anneaux", "Star Wars"],
};

console.log(typeof person.likedMovies);

person.likedMovies.forEach((movie) => {
  console.log(movie);
});
