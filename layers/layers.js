var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LIMITE_DISTRITAL_1 = new ol.format.GeoJSON();
var features_LIMITE_DISTRITAL_1 = format_LIMITE_DISTRITAL_1.readFeatures(json_LIMITE_DISTRITAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITE_DISTRITAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_DISTRITAL_1.addFeatures(features_LIMITE_DISTRITAL_1);
var lyr_LIMITE_DISTRITAL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITE_DISTRITAL_1, 
                style: style_LIMITE_DISTRITAL_1,
                popuplayertitle: "LIMITE_DISTRITAL",
                interactive: true,
                title: '<img src="styles/legend/LIMITE_DISTRITAL_1.png" /> LIMITE_DISTRITAL'
            });
var format_MANZANA_2 = new ol.format.GeoJSON();
var features_MANZANA_2 = format_MANZANA_2.readFeatures(json_MANZANA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANA_2.addFeatures(features_MANZANA_2);
var lyr_MANZANA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANZANA_2, 
                style: style_MANZANA_2,
                popuplayertitle: "MANZANA",
                interactive: true,
                title: '<img src="styles/legend/MANZANA_2.png" /> MANZANA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LIMITE_DISTRITAL_1.setVisible(true);lyr_MANZANA_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LIMITE_DISTRITAL_1,lyr_MANZANA_2];
lyr_LIMITE_DISTRITAL_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MANZANA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'Text_': 'Text_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LIMITE_DISTRITAL_1.set('fieldImages', {'OBJECTID': '', 'Entity': '', 'Layer': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_MANZANA_2.set('fieldImages', {'OBJECTID': '', 'Layer': '', 'Text_': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LIMITE_DISTRITAL_1.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MANZANA_2.set('fieldLabels', {'OBJECTID': 'no label', 'Layer': 'no label', 'Text_': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MANZANA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});