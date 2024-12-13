var dataset = ee.ImageCollection('ESA/WorldCover/v100');
var dataset2 = ee.ImageCollection('ESA/WorldCover/v200');

// Get the list of dates (system:time_start) for the available images in the collection
var dates = dataset.aggregate_array('system:time_start');

// Print the dates to the console in a readable format
dates.evaluate(function(datesList) {
  // Iterate through the list and format each date
  datesList.forEach(function(date) {
    var formattedDate = ee.Date(date).format('YYYY-MM-dd').getInfo(); // Format the date
    print(formattedDate);  // Print each date in the console
  });
});

// Visualize the first image from the collection
var visualization = {
  bands: ['Map'],
};

Map.centerObject(dataset);
Map.addLayer(dataset.first(), visualization, '2020');
Map.addLayer(dataset2.first(), visualization, '2021');
Map.setCenter(120.96855008334703, 14.21274905010049, 11);
