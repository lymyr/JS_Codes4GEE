var image_1975 = ee.Image('JRC/GHSL/P2023A/GHS_BUILT_S/1975');
var built_1975 = image_1975.select('built_surface');
var image_2020 = ee.Image('JRC/GHSL/P2023A/GHS_BUILT_S/2020');
var built_2020 = image_2020.select('built_surface');

var image_2030 = ee.Image('JRC/GHSL/P2023A/GHS_BUILT_S/2030');
var built_2030 = image_2030.select('built_surface');
var visParams = {min: 0.0, max: 8000.0, palette: ['000000', 'FFFFFF']};

Map.setCenter(120.96855008334703, 14.21274905010049, 11);
Map.addLayer(built_1975, visParams, 'Built-up surface [m2], 1975');
Map.addLayer(built_2020, visParams, 'Built-up surface [m2], 2020');
Map.addLayer(built_2030, visParams, 'Built-up surface [m2], 2030');

//https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S