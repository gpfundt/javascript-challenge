// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(alienData) {
    //console.log(alienData);
    var row = tbody.append("tr");
    Object.entries(alienData).forEach(function([key, value]) {
      //console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
      //console.log(value);
    });
  });

const timebutton = d3.select("#filter-time-btn");
timebutton.on("click", function() {
      // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
      // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    tableData = data.filter(x=>x.datetime === inputValue);
    console.log(tableData);

    tbody.html = "";

    tableData.forEach(function(go) {
        var row = tbody.append("tr");
        Object.entries(go).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
          console.log(value);
        });
      });
});

// const citybutton = d3.select("#filter-city-btn");
// citybutton.on("click", function() {
//       // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#city");
//       // Get the value property of the input element
//     var inputValue = inputElement.property("value").toLowerCase();
//     console.log(inputValue);
//     console.log(inputElement);
//     tableData = data.filter(x => x.y === inputValue);

//     tbody.html = ""

//     tableData.forEach(function(go) {
//         var row = tbody.append("tr");
//         Object.entries(go).forEach(function([key, value]) {
//           var cell = row.append("td");
//           cell.text(value);
//           //console.log(value);
//         });
//       });
// });

// const statebutton = d3.select("#filter-state-btn");
// statebutton.on("click", function() {
//       // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#state");
//       // Get the value property of the input element
//     var inputValue = inputElement.property("value").toLowerCase();
//     console.log(inputValue);
//     console.log(inputElement);
//     tableData = data.filter(x => x.y === inputValue);

//     tbody.html = ""

//     tableData.forEach(function(go) {
//         var row = tbody.append("tr");
//         Object.entries(go).forEach(function([key, value]) {
//           var cell = row.append("td");
//           cell.text(value);
//           //console.log(value);
//         });
//       });
// });

// const countrybutton = d3.select("#filter-country-btn");
// countrybutton.on("click", function() {
//       // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#country");
//       // Get the value property of the input element
//     var inputValue = inputElement.property("value").toLowerCase();
//     console.log(inputValue);
//     console.log(inputElement);
//     tableData = data.filter(x => x.y === inputValue);

//     tbody.html = ""

//     tableData.forEach(function(go) {
//         var row = tbody.append("tr");
//         Object.entries(go).forEach(function([key, value]) {
//           var cell = row.append("td");
//           cell.text(value);
//           //console.log(value);
//         });
//       });
// });

// const shapebutton = d3.select("#filter-shape-btn");
// shapebutton.on("click", function() {
//       // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#shape");
//       // Get the value property of the input element
//     var inputValue = inputElement.property("value").toLowerCase();
//     console.log(inputValue);
//     console.log(inputElement);
//     tableData = data.filter(x => x.y === inputValue);

//     tbody.html = ""

//     tableData.forEach(function(go) {
//         var row = tbody.append("tr");
//         Object.entries(go).forEach(function([key, value]) {
//           var cell = row.append("td");
//           cell.text(value);
//           //console.log(value);
//         });
//       });
// });
