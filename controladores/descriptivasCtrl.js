/**
 * Created by Piwica on 10/25/14.
 */
app.controller('descriptivasCtrl',['$scope', function($scope) {

    $scope.humedad = "0";
    $scope.presion = "0";

    $scope.$on( 'humedad.update', function (event, newHumedad) {
        $scope.humedad = newHumedad;
    });

    $scope.$on( 'presion.update', function (event, newPresion) {
        $scope.presion = newPresion;
    });

}]);