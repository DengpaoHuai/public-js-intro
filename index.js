function displayData(data = "No data provided") {
  console.log(data);
  console.log(typeof data);
  console.log("ok");
}

displayData("John");
displayData(42);
displayData(true);
displayData();
