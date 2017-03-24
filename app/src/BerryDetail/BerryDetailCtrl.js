'use strict';

pokemonApp.controller('BerryDetailCtrl', function($scope, $routeParams, BerriesService) {

    $scope.berryLoaded = false;
   
    $scope.berry = BerriesService.get({
        berryId: $routeParams['berryId']
    }, function(successResult) {
        // Окей!
        console.log(successResult);
        $scope.notfoundError = false;
        $scope.berryLoaded = true;
    }, function(errorResult) {
        // Не окей..
        $scope.notfoundError = true;
        $scope.berryLoaded = true;
    });

    $scope.berry.$promise.then(function(result) {
        //$scope.berryLoaded = true;
    });

    $scope.deleteBerry = function(berryId) {

        $scope.berry.$delete({
            berryId: berryId
        }, function(successResult) {
            // Окей!
            $scope.deletionSuccess = true;
        }, function(errorResult) {
            // Не окей..
            $scope.deletionError = true;
        });

    }

});
