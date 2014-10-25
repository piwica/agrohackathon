/**
 * Created by Piwica on 10/25/14.
 */
//Width and height
var serie1 = [];
var serie2 = [];
var serie3 = [];
var serie4 = [];
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

function serie1(lat, lon){

}

function processData(allText) {
    var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        console.log(tarr);
    }
}