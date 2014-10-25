/**
 * Created by Piwica on 10/25/14.
 */

'use strict';

app
    .provider('actualizarStatsDescriptivasSvc', function () {
        this.$get = [ "$rootScope", function ($rootScope) {

            var function1 = function ( lat,  lon) {
                console.log("funcion 1:"+lat+","+lon);
            }

            var function2 = function (lat, lon) {
                console.log("funcion 2:"+lat+","+lon);
            }
            return{
                function1: function1,
                function2: function2
            }
        }]

    });