angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };
    });