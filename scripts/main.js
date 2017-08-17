'use strict';

var module = angular.module('myApp', []);

module.controller('MyController', function ($scope){
    $scope.name = "Greeting!";
    $scope.company = '';
    $scope.flag = false;
    $scope.OpenModal = function(){
        $scope.flag = true;
    }
});

module.directive('modal', function(){
    return {
        restrict: 'E',
        scope: {
            title: '@',
            display : '='
        },
        transclude: true,
        template: '<div class=\'ng-modal\' ng-show="display">\n' +
        '        <div class=\'ng-modal-overlay\' \'></div>\n' +
        '        <div class=\'ng-modal-dialog\'>\n' +
        '            <h1>{{ title }}</h1>\n' +
        '            <div class=\'ng-modal-close\' ng-click="CloseModal()">X</div>\n' +
        '            <div class=\'ng-modal-dialog-content\' ng-transclude></div>\n' +
        '        </div>\n' +
        '        </div>',


        controller: function ($scope) {
            $scope.CloseModal = function () {
                $scope.display = false;
            };
        }
    };
});

module.directive('test', function(){
    return {
        template: "Name {{ name }} Company {{ company }}"
        };
});
