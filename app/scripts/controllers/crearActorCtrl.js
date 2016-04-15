(function(){
    angular.module('angularSpa')
    .controller('crearActorCtrl', function($scope, $http,crearActorSrv){   
        $scope.crearActor = function (){
            crearActorSrv.crearActor($scope.form.nombre, $scope.form.apellido)
            .success(function(data){
                $scope.actors = data;
                console.log(data);
            })
            .error(function(error){
                $scope.actors = 'Error al consultar por usuarios';
            });
                $scope.form.nombre="";
                $scope.form.apellido="";
        }
    });
    
})();