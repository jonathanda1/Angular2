angular.module("ServicePractice")
    .factory("MathService", MathService)

function MathService () {
    var service = {}
    service.square = function (n) {
        return n*n
    }
    service.cubeModX = function(n , x) {
        return (n*n*n) % x
    }
    return service
}
