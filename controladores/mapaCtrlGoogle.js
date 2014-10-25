app.controller('mapactrlgoogle',['$scope','GoogleMapApi'.ns(), 'actualizarStatsDescriptivasSvc', function($scope, GoogleMapApi, actualizarStatsDescriptivasSvc) {
    $scope.map = {center: {latitude: -32.2, longitude: -61.30 }, zoom: 9 };
    $scope.options = {scrollwheel: false};
    $scope.circles = [];
    jQuery.each(puntosejemplo, function(i, val) {
        var circle =
            {
                id: i,
                center: {
                    latitude: val.lat,
                    longitude: val.lon
                },
                radius: 1000,
                stroke: {
                    color: 'red',
                    weight: 2,
                    opacity: 1
                },
                fill: {
                    color: 'red',
                    opacity: 0.5
                },
                events: {
                    click: function (circle, eventName, args) {
                        var lat = circle.getCenter().lat();
                        var lon = circle.getCenter().lng();
                        actualizarStatsDescriptivasSvc.function1(lat,lon);
                        actualizarStatsDescriptivasSvc.function2(lat,lon);
                    }
                },
                geodesic: true, // optional: defaults to false
                draggable: false, // optional: defaults to false
                editable: false, // optional: defaults to false
                visible: true // optional: defaults to true
            };

            $scope.circles.push(circle);
    }
    );



    /*
     * GoogleMapApi is a promise with a
     * then callback of the google.maps object
     *   @pram: maps = google.maps
     */
    GoogleMapApi.then(function(maps) {
        //alert("Here comes the map");
    });

}]);