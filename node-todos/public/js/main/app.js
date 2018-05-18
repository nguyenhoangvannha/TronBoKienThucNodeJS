var app = angular.module('app.todo', ['xeditable']);
app.controller ("todoController", ['$scope', 'svTodos', function ($scope,svTodos) {
    $scope.appName = "Todos Dashboard";
    $scope.todos = [];
    $scope.loading = true;
    svTodos.get().then(function (result) {
        $scope.todos = result.data;
        console.log(result.data)
        $scope.loading = false;
    }, null);
    $scope.formData = {};
    
    $scope.createTodo = function () {
        var todo = {
            NAME: $scope.formData.NAME,
            ISDONE: false
        };
        svTodos.create(todo).then(function (respons) {
            $scope.todos.push(todo);
        })
        $scope.formData.NAME = "";
    }
    $scope.updateTodo = function (todo) {
        $scope.loading = true;
        svTodos.update(todo).then(function (params) {
            console.log("delok", params);
           $scope.loading = false;            
        },function (params) {
            console.log("delerr", params);
           $scope.loading = false;            
        });
    };
    $scope.deleteTodo = function (todo) {
        $scope.loading = true;
        svTodos.delete(todo.ID).then(function (params) {
            console.log("delok", params);
           $scope.loading = false;            
        },function (params) {
            console.log("delerr", params);
           $scope.loading = false;            
        });
    };
}]);