/**
 * Created by Piwica on 10/25/14.
 */
//Width and height
var serie1 = [];
var serie2 = [];
var serie3 = [];
var serie4 = [];
$(document).ready(function(){
    leer();
});
function leer(){
    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "javascripts/Temperaturas_ya_final.csv",
            dataType: "text",
            success: function(data) {processData(data);}
        });
    });
}

function devolverserie1(lat, lon){
    console.log(serie1);
return serie1;
}
function devolverserie2(lat, lon){
    return serie2;
}
function devolverserie3(lat, lon){
    return serie3;
}
function devolverserie4(lat, lon){
    return serie4;
}

function processData(allText) {
    var record_num = 7;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');

    var arrayLength = allTextLines.length;
    for (var i = 1; i < 16; i++) {
        var entries = allTextLines[i].split(',');
        serie1.push([entries[0],entries[1]]);
        serie2.push([entries[0],entries[2]]);
        serie3.push([entries[0],entries[3]]);
        serie4.push([entries[0],entries[4]]);

        //Do something
    }
}