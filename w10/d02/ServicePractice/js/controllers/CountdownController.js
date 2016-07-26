angular.module("ServicePractice")
    .controller("CountdownController", CountdownController)


    CountdownController.$inject = ['$interval']

    function CountdownController ($interval) {
      vm = this
        vm.time

        $interval(function () {
          var endOfCourse = new Date('05-27-2016 17:00:00').getTime();
          var currentTime = new Date().getTime();
          var msUntilEndOfCourse = endOfCourse - currentTime
          var seconds = msUntilEndOfCourse / 1000;
          var minutes = seconds /60
          var hours = minutes /60
          var days = hours / 24
          vm.time = Math.floor(days) + " Days " + Math.floor(hours%24) + " Hours " + Math.floor(minutes%60) + " Minutes " + Math.floor(seconds%60) + " Seconds "
        }, 1000)
    }
