var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource']);

angular.
module('PokemonApp')

.config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        // Покемоны
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create/pokemon', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        // Ягоды
        when('/berries', {
            templateUrl: 'src/BerriesList/BerriesList.html',
            controller: 'BerriesListCtrl'
        }).
        when('/berries/:berryId', {
            templateUrl: 'src/BerryDetail/BerryDetail.html',
            controller: 'BerryDetailCtrl'
        }).
        when('/berries/edit/:berryId', {
            templateUrl: 'src/EditBerry/EditBerry.html',
            controller: 'EditBerryCtrl'
        }).
        when('/create/berry', {
            templateUrl: 'src/CreateBerry/CreateBerry.html',
            controller: 'CreateBerryCtrl'
        }).
        
        otherwise({
            redirectTo: '/'
        });
    }
])

.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.headers.common = {
        "application-id": "49FFA7FB-3DAE-0943-FF79-68E3AA886F00",
        "secret-key": "BAF58198-6B37-F61D-FFA2-D1D654719400"
    };

}]);
