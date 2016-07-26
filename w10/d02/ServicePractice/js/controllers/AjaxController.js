angular.module("ServicePractice")
    .controller("AjaxController", AjaxController)


// 1. Inject service into controller
AjaxController.$inject = ['$http', 'MathService', 'OpenWeather']

// 2. Add service to controller's argument list
function AjaxController ($http, MathService, OpenWeather) {
    var vm = this
    vm.query = ''
    vm.result = ''


// how a API call would be processed, link stays in service, vm.query grabs input, vm.result lists result in index.html
    vm.search = function () {
         // 3. Invoke service
        OpenWeather.getWeather(vm.query).then(function(response) {
          vm.result =response.data.list[0].main.temp
        })
    }
}
