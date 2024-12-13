// Define the ImageCollection for JAXA ALOS PALSAR yearly data
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/FNF')
  .select('fnf');

// Define visualization parameters for forest and non-forest classes
var forestNonForestVis = {
  min: 1,
  max: 3,
  palette: ['006400', 'feff99', '0000ff'],  // Green for forest, yellow for non-forest, blue for water
};

// Filter the dataset for the year 2007
var forest2007 = dataset.filterDate('2007-01-01', '2007-12-31').first();

// Filter the dataset for the year 2018
var forest2018 = dataset.filterDate('2017-01-01', '2017-12-31').first();

// Set the map center to the Philippines
Map.setCenter(120.96855008334703, 14.21274905010049, 11);

// Add the forest/non-forest layer for 2007
Map.addLayer(forest2007, forestNonForestVis, 'Forest/Non-Forest 2007');

// Add the forest/non-forest layer for 2018
Map.addLayer(forest2018, forestNonForestVis, 'Forest/Non-Forest 2018');
