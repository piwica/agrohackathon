/**
 * Created by Piwica on 10/25/14.
 */

'use strict';

app
    .provider('actualizarStatsDescriptivasSvc', function () {
        this.$get = [ "$rootScope", function ($rootScope) {

            var function1 = function ( lat,  lon) {
                $.ajax({
                    url: 'https://simple-weather.p.mashape.com/weatherdata?lat='+lat+'&lng='+lon, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
                    type: 'GET', // The HTTP Method
                    success: function(data) {
                        var json = $.parseJSON(data);
                        $rootScope.$broadcast('humedad.update', json.query.results.channel.atmosphere.humidity);
                        $rootScope.$broadcast('presion.update', json.query.results.channel.atmosphere.pressure);
                    },
                    error: function(err) { alert(err); },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("X-Mashape-Authorization", "eSjAX5aHuLmshMqrgaZ4kuW43RdAp1AZYigjsn8FnZPvu17BRM"); // Enter here your Mashape key
                    }
                });

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
