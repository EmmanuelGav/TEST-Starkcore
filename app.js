console.log("entro!");
var MainController = function($scope){
    $scope.list = [{
        originPlace: "Houston, TX, 33619",
        destinationPlace: "Atlanta, GA, 30123",
        date: new Date(),
        price: 250,
        count: 2
    }, {
        originPlace: "Boston, MA, 02110",
        destinationPlace: "Atlanta, GA, 30123",
        date: new Date(),
        price: 300,
        count: 1
    }, {
        originPlace: "California, LA, 90001",
        destinationPlace: "Atlanta, GA, 30123",
        date: new Date(),
        price: 550,
        count: 3
    }, {
        originPlace: "Boston, MA, 02110",
        destinationPlace: "Atlanta, GA, 30123",
        date: new Date(),
        price: 200,
        count: 1
    }];
};
var myApp = angular.module('myApp', []);

myApp.controller('MainController', MainController );
