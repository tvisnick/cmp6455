var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_SLcounty_Boundary_1 = new ol.format.GeoJSON();
var features_SLcounty_Boundary_1 = format_SLcounty_Boundary_1.readFeatures(json_SLcounty_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLcounty_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLcounty_Boundary_1.addFeatures(features_SLcounty_Boundary_1);
var lyr_SLcounty_Boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLcounty_Boundary_1, 
                style: style_SLcounty_Boundary_1,
                popuplayertitle: "SLcounty_Boundary",
                interactive: false,
                title: '<img src="styles/legend/SLcounty_Boundary_1.png" /> SLcounty_Boundary'
            });
var format_SL_county_pedestriancrashes_2015_2 = new ol.format.GeoJSON();
var features_SL_county_pedestriancrashes_2015_2 = format_SL_county_pedestriancrashes_2015_2.readFeatures(json_SL_county_pedestriancrashes_2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SL_county_pedestriancrashes_2015_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_county_pedestriancrashes_2015_2.addFeatures(features_SL_county_pedestriancrashes_2015_2);
var lyr_SL_county_pedestriancrashes_2015_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SL_county_pedestriancrashes_2015_2, 
                style: style_SL_county_pedestriancrashes_2015_2,
                popuplayertitle: "SL_county_pedestriancrashes_2015",
                interactive: true,
                title: '<img src="styles/legend/SL_county_pedestriancrashes_2015_2.png" /> SL_county_pedestriancrashes_2015'
            });
var format_SL_county_pedestriancrashes_2016_3 = new ol.format.GeoJSON();
var features_SL_county_pedestriancrashes_2016_3 = format_SL_county_pedestriancrashes_2016_3.readFeatures(json_SL_county_pedestriancrashes_2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SL_county_pedestriancrashes_2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_county_pedestriancrashes_2016_3.addFeatures(features_SL_county_pedestriancrashes_2016_3);
var lyr_SL_county_pedestriancrashes_2016_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SL_county_pedestriancrashes_2016_3, 
                style: style_SL_county_pedestriancrashes_2016_3,
                popuplayertitle: "SL_county_pedestriancrashes_2016",
                interactive: true,
                title: '<img src="styles/legend/SL_county_pedestriancrashes_2016_3.png" /> SL_county_pedestriancrashes_2016'
            });
var format_SL_county_pedestriancrashes_2017_4 = new ol.format.GeoJSON();
var features_SL_county_pedestriancrashes_2017_4 = format_SL_county_pedestriancrashes_2017_4.readFeatures(json_SL_county_pedestriancrashes_2017_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SL_county_pedestriancrashes_2017_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_county_pedestriancrashes_2017_4.addFeatures(features_SL_county_pedestriancrashes_2017_4);
var lyr_SL_county_pedestriancrashes_2017_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SL_county_pedestriancrashes_2017_4, 
                style: style_SL_county_pedestriancrashes_2017_4,
                popuplayertitle: "SL_county_pedestriancrashes_2017",
                interactive: true,
                title: '<img src="styles/legend/SL_county_pedestriancrashes_2017_4.png" /> SL_county_pedestriancrashes_2017'
            });
var format_SL_county_pedestriancrashes_2018_5 = new ol.format.GeoJSON();
var features_SL_county_pedestriancrashes_2018_5 = format_SL_county_pedestriancrashes_2018_5.readFeatures(json_SL_county_pedestriancrashes_2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SL_county_pedestriancrashes_2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_county_pedestriancrashes_2018_5.addFeatures(features_SL_county_pedestriancrashes_2018_5);
var lyr_SL_county_pedestriancrashes_2018_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SL_county_pedestriancrashes_2018_5, 
                style: style_SL_county_pedestriancrashes_2018_5,
                popuplayertitle: "SL_county_pedestriancrashes_2018",
                interactive: true,
                title: '<img src="styles/legend/SL_county_pedestriancrashes_2018_5.png" /> SL_county_pedestriancrashes_2018'
            });
var format_SL_county_pedestriancrashes_2019_6 = new ol.format.GeoJSON();
var features_SL_county_pedestriancrashes_2019_6 = format_SL_county_pedestriancrashes_2019_6.readFeatures(json_SL_county_pedestriancrashes_2019_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SL_county_pedestriancrashes_2019_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_county_pedestriancrashes_2019_6.addFeatures(features_SL_county_pedestriancrashes_2019_6);
var lyr_SL_county_pedestriancrashes_2019_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SL_county_pedestriancrashes_2019_6, 
                style: style_SL_county_pedestriancrashes_2019_6,
                popuplayertitle: "SL_county_pedestriancrashes_2019",
                interactive: true,
                title: '<img src="styles/legend/SL_county_pedestriancrashes_2019_6.png" /> SL_county_pedestriancrashes_2019'
            });

lyr_CartoLight_0.setVisible(true);lyr_SLcounty_Boundary_1.setVisible(true);lyr_SL_county_pedestriancrashes_2015_2.setVisible(true);lyr_SL_county_pedestriancrashes_2016_3.setVisible(true);lyr_SL_county_pedestriancrashes_2017_4.setVisible(true);lyr_SL_county_pedestriancrashes_2018_5.setVisible(true);lyr_SL_county_pedestriancrashes_2019_6.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_SLcounty_Boundary_1,lyr_SL_county_pedestriancrashes_2015_2,lyr_SL_county_pedestriancrashes_2016_3,lyr_SL_county_pedestriancrashes_2017_4,lyr_SL_county_pedestriancrashes_2018_5,lyr_SL_county_pedestriancrashes_2019_6];
lyr_SLcounty_Boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SL_county_pedestriancrashes_2015_2.set('fieldAliases', {'objectid': 'objectid', 'pedestrian': 'pedestrian', 'YEAR': 'YEAR', });
lyr_SL_county_pedestriancrashes_2016_3.set('fieldAliases', {'objectid': 'objectid', 'pedestrian': 'pedestrian', 'YEAR': 'YEAR', });
lyr_SL_county_pedestriancrashes_2017_4.set('fieldAliases', {'objectid': 'objectid', 'pedestrian': 'pedestrian', 'YEAR': 'YEAR', });
lyr_SL_county_pedestriancrashes_2018_5.set('fieldAliases', {'objectid': 'objectid', 'pedestrian': 'pedestrian', 'YEAR': 'YEAR', });
lyr_SL_county_pedestriancrashes_2019_6.set('fieldAliases', {'objectid': 'objectid', 'pedestrian': 'pedestrian', 'YEAR': 'YEAR', });
lyr_SLcounty_Boundary_1.set('fieldImages', {'OBJECTID': 'Range', 'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'Range', 'POP_CURRES': 'Range', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SL_county_pedestriancrashes_2015_2.set('fieldImages', {'objectid': '', 'pedestrian': '', 'YEAR': '', });
lyr_SL_county_pedestriancrashes_2016_3.set('fieldImages', {'objectid': '', 'pedestrian': '', 'YEAR': '', });
lyr_SL_county_pedestriancrashes_2017_4.set('fieldImages', {'objectid': '', 'pedestrian': '', 'YEAR': '', });
lyr_SL_county_pedestriancrashes_2018_5.set('fieldImages', {'objectid': '', 'pedestrian': '', 'YEAR': '', });
lyr_SL_county_pedestriancrashes_2019_6.set('fieldImages', {'objectid': '', 'pedestrian': '', 'YEAR': '', });
lyr_SLcounty_Boundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SL_county_pedestriancrashes_2015_2.set('fieldLabels', {'objectid': 'no label', 'pedestrian': 'no label', 'YEAR': 'inline label - visible with data', });
lyr_SL_county_pedestriancrashes_2016_3.set('fieldLabels', {'objectid': 'no label', 'pedestrian': 'no label', 'YEAR': 'inline label - visible with data', });
lyr_SL_county_pedestriancrashes_2017_4.set('fieldLabels', {'objectid': 'no label', 'pedestrian': 'no label', 'YEAR': 'inline label - visible with data', });
lyr_SL_county_pedestriancrashes_2018_5.set('fieldLabels', {'objectid': 'no label', 'pedestrian': 'no label', 'YEAR': 'inline label - visible with data', });
lyr_SL_county_pedestriancrashes_2019_6.set('fieldLabels', {'objectid': 'no label', 'pedestrian': 'no label', 'YEAR': 'inline label - visible with data', });
lyr_SL_county_pedestriancrashes_2019_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});