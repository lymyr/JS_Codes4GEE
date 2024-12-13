var map2015 = ee.Image('COPERNICUS/Landcover/100m/Proba-V-C3/Global/2015')
  .select('discrete_classification');

var map2016 = ee.Image('COPERNICUS/Landcover/100m/Proba-V-C3/Global/2016')
  .select('discrete_classification');

var map2017 = ee.Image('COPERNICUS/Landcover/100m/Proba-V-C3/Global/2017')
  .select('discrete_classification');

var map2018 = ee.Image('COPERNICUS/Landcover/100m/Proba-V-C3/Global/2018')
  .select('discrete_classification');

var map2019 = ee.Image('COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019')
  .select('discrete_classification');

Map.setCenter(120.96855008334703, 14.21274905010049, 11);

Map.addLayer(map2015, {}, 'Land Cover 2015');
Map.addLayer(map2016, {}, 'Land Cover 2016');
Map.addLayer(map2017, {}, 'Land Cover 2017');
Map.addLayer(map2018, {}, 'Land Cover 2018');
Map.addLayer(map2019, {}, 'Land Cover 2019');