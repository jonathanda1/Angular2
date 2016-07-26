angular.module("ServicePractice")
    .factory("OpenWeather", OpenWeather)

OpenWeather.$inject = ['$http']

    function OpenWeather ($http) {
      var service = {}
     // this will return the ajax request
      service.getWeather = function (cityId) {
        return $http.get("http://openweathermap.org/data/2.5/forecast?appid=b1b15e88fa797225412429c1c50c122a&id=" + cityId)
      }

      return service
    }


