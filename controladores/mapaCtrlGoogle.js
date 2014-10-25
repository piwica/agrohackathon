app.controller('mapactrlgoogle',['$scope','GoogleMapApi'.ns(), function($scope, GoogleMapApi) {
    $scope.map = {center: {latitude: 44, longitude: -108 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.circles = [
        {
            id: 1,
            center: {
                latitude: 44,
                longitude: -108
            },
            radius: 500000,
            stroke: {
                color: '#08B21F',
                weight: 2,
                opacity: 1
            },
            fill: {
                color: '#08B21F',
                opacity: 0.5
            },
            events: {
                click: function (circle, eventName, args) {
                    var lat = circle.getCenter().lat();
                    var lon = circle.getCenter().lng();
                    var radius = circle.getRadius();
                    console.log(lat+","+lon+","+radius);
                }
            },
            geodesic: true, // optional: defaults to false
            draggable: false, // optional: defaults to false
            editable: false, // optional: defaults to false
            visible: true // optional: defaults to true
        }
    ];


    /*
     * GoogleMapApi is a promise with a
     * then callback of the google.maps object
     *   @pram: maps = google.maps
     */
    GoogleMapApi.then(function(maps) {
        //alert("Here comes the map");
    });

}]);