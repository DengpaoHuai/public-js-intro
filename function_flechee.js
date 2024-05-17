const displayData = (data) => {
  console.log(data);
  console.log(typeof data);
  console.log("ok");
};

displayData("John");
displayData(42);
displayData(true);
//fonction de callback
displayData(function () {
  console.log("Hello");
});
//fonction de callback qui est une fonction fléchée
displayData(() => {
  console.log("Hello");
});
