////////////////////////////////////////////////////////////
// 
// This Script Need Your Layer Name
// 
////////////////////////////////////////////////////////////


layerName = 'this_is_your_layer_name';

docs = app.documents;
curDoc = app.activeDocument;


for(var i = 0; i < docs.length; i++){
    
    var curLayer;
    app.activeDocument = docs[i];
    app.activeDocument.layers.getByName(layerName).visible = false;

    app.activeDocument = curDoc;
 }