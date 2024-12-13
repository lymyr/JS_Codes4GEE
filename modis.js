var dataset = ee.ImageCollection('MODIS/061/MCD12Q1');
var landCoverType = 'LC_Type1'
var igbpLandCover = dataset.select(landCoverType);
var igbpLandCoverVis = {
  min: 1.0,
  max: 17.0,
  palette: [
    '05450a', '05450a', '05450a', '05450a', '05450a', '05450a', '05450a',
    '05450a', '05450a', '05450a', '4c8c80', 'd6f2c1', 'd35757', 'd6f2c1',
    '69fff8', 'd6f8ff', 'd6f8ff'
  ],
};
Map.setCenter(120.96855008334703, 14.21274905010049, 11);
// Map.addLayer(igbpLandCover, igbpLandCoverVis, 'IGBP Land Cover');


// Filter for January 1, 2001
var specificDate2001 = ee.Date('2001-01-01');
var filteredDataset2001 = dataset.filterDate(specificDate2001, specificDate2001.advance(1, 'day'));
var imageForDate2001 = filteredDataset2001.first();

// Add the layer for January 1, 2001
Map.addLayer(imageForDate2001.select(landCoverType), igbpLandCoverVis, 'IGBP Land Cover for Jan 1, 2001');

// Filter for January 1, 2023
var specificDate2023 = ee.Date('2023-01-01');
var filteredDataset2023 = dataset.filterDate(specificDate2023, specificDate2023.advance(1, 'day'));
var imageForDate2023 = filteredDataset2023.first();

// Add the layer for January 1, 2023
Map.addLayer(imageForDate2023.select(landCoverType), igbpLandCoverVis, 'IGBP Land Cover for Jan 1, 2023');