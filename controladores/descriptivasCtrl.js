/**
 * Created by Piwica on 10/25/14.
 */
app.controller('descriptivasCtrl',['$scope', function($scope) {

    $scope.humedad = "20%";
    $scope.cultivoAntecesor = "Soja";
    $scope.estadoFenologico = "Bueno";
    $scope.estadisticasClimaticas = "Lluvia";

    $scope.$on( 'humedad.update', function (event, newHumedad) {
        $scope.humedad = newHumedad;
    });

}]);