app.controller('mapactrlgoogle',['$scope','GoogleMapApi'.ns(), function($scope, GoogleMapApi) {
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
    $scope.options = {scrollwheel: false};


    /*
     * GoogleMapApi is a promise with a
     * then callback of the google.maps object
     *   @pram: maps = google.maps
     */
    GoogleMapApi.then(function(maps) {
        //alert("Here comes the map");
    });

}]);