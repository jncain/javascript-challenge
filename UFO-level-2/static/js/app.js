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

// Reset button
var resetButton = d3.select("#reset-btn");
resetButton.on("click", function() {
    window.location.reload(true);
});

// Search button
var searchButton = d3.select("#filter-btn");

searchButton.on("click", function() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    
    // Select the input elements
    var datetimeElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");
    
    // get the value
    var dateValue = datetimeElement.property("value");
    var cityValue = cityElement.property("value").toLowerCase();
    var stateValue = stateElement.property("value").toLowerCase();
    var countryValue = countryElement.property("value").toLowerCase();
    var shapeValue = shapeElement.property("value").toLowerCase();

    // Check for filters
    if (dateValue !== "" || cityValue !== "" || stateValue !== "" || countryValue !== "" || shapeValue !== "") {
        // Filtered table Function 
        filteredTable(dateValue, cityValue, stateValue, countryValue, shapeValue);
    }
    else {
        console.log("No search criteria entered");
    }
});

// Function for filtering data and creating table
function filteredTable(dateValue, cityValue, stateValue, countryValue, shapeValue) {
    // Clear table
    tbody.html("");

    // Array to store filtered data
    var filteredData = [];

    // If Statements to filter data
    // Apply date filter
    if (dateValue !== "") {
        filteredData = tableData.filter(sighting => sighting.datetime === dateValue);
    }
    else {
        filteredData = tableData;
    };
    // Apply city filter
    if (cityValue !== "") {
        filteredData = filteredData.filter(data => data.city === cityValue);
    };
    // Apply state filter
    if (stateValue !== "") {
        filteredData = filteredData.filter(data => data.state === stateValue);
    };
    // Apply country filter
    if (countryValue !== "") {
        filteredData = filteredData.filter(data => data.country === countryValue);
    };
    // Apply shape filter
    if (shapeValue !== "") {
        filteredData = filteredData.filter(data => data.shape === shapeValue);
    };

    // Create table
    filteredData.forEach(function(searched) {
        var row = tbody.append("tr");
        Object.entries(searched).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

    


