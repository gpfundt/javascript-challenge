// from data.js
var tableData = data;

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
    var filteredData = data.filter(x => x.datetime === inputValue);
    console.log(filteredData);
    
    tbody.html("");

    filteredData.forEach(function(filteredTimes) {
        var row = tbody.append("tr");
        Object.entries(filteredTimes).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
          //console.log(value);
        });
      });
});

const citybutton = d3.select("#filter-city-btn");
citybutton.on("click", function() {
      // Select the input element and get the raw HTML node
    var inputElement = d3.select("#city");
      // Get the value property of the input element
    var inputValue = inputElement.property("value").toLowerCase();
    console.log(inputValue);
    console.log(inputElement);
    var filteredData = data.filter(x => x.city === inputValue);
    console.log(filteredData);
    
    tbody.html("");

    filteredData.forEach(function(filteredCities) {
        var row = tbody.append("tr");
        Object.entries(filteredCities).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
          //console.log(value);
        });
      });
});