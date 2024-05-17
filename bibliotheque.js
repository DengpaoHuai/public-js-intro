let books = [
  {
    id: "id",
    title: "La Bible",
    year: "0",
    author: "??",
    genre: "religious",
    disponible: false,
  },
  {
    id: "id",
    title: "Le Coran",
    year: "50",
    author: "??",
    genre: "religious",
    disponible: true,
  },
  {
    id: "id",
    title: "La Torah",
    year: "-150",
    author: "??",
    genre: "religious",
    disponible: true,
  },
];

const addBook = (book) => {
  books.push(book);
};

addBook({
  id: "id",
  title: "Abhidhamma Pitaka",
  year: "-750",
  author: "??",
  genre: "religious",
  disponible: true,
});

console.log(books);

//Afficher tous les livres UN PAR UN
//indice : foreach

//filter
// Une fonction qui prends en paramètre une fonction de callback de trie
//Si la fonction de callback retourne true, alors l'élément est gardé
//si la fonction de callback retourne false, alors l'élément est supprimé

const filterBooks = (search) => {
  let arrayFiltered = books.filter((item) => {
    console.log(item);
    if (item.title.includes(search)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(arrayFiltered);
};

filterBooks("La");
