// from data.js
var tableData = data;

// Get a reference to the table
var tbody = d3.select("tbody");

// Loop through 'data' and add to table
tableData.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Get a reference to the search button
var searchButton = d3.select("#filter-btn");

searchButton.on("click", function() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    
    // Select the input element
    var inputElement = d3.select("#datetime");
    
    // get the value
    var inputValue = inputElement.property("value");
    // Check
    // console.log(inputValue);

    // Use the value to filter the data by datetime
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // Check
    // console.log(filteredData);

    // Clear table
    tbody.html("");

    // Add search results to table
    filteredData.forEach(function(searched) {
        var row = tbody.append("tr");

        Object.entries(searched).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

// Reset button
var resetButton = d3.select("#reset-btn");
resetButton.on("click", function() {
    window.location.reload(true);
});


