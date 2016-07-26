(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

  function PresidentsController($http){
    var vm = this
    vm.all = [];

    // ajax request from url and responds w/ data
    $http
        .get("http://localhost:3000/api/presidents")
        .then(function(response) {
          // parse the data to return what you want
          vm.all = response.data.presidents;
        }, function(err) {
          console.log(err)
        })

    vm.removePresident = removePresident
    vm.uncover = uncover
    vm.addPresident = addPresident;
    vm.newPresident = {};

    function addPresident(){
      $http
        .post(
         "http://localhost:3000/api/presidents",
         vm.newPresident
         ).then(function(response) {
          // pushes the newPresident into the all array
        vm.all.push(vm.newPresident);
        // AUto clears the form
        vm.newPresident = {};
      }, function (err) {
        console.log(err)
      });
    }

    function uncover(president) {
      president.uncovered = !president.uncovered;
      $http.put("http://localhost:3000/api/presidents/" + president._id,
        president);
    }

    function removePresident(president) {
      $http.delete("http://localhost:3000/api/presidents/" + president._id).then(function () {
        vm.all.splice(vm.all.indexOf(president), 1)
      })
    }


  }



})();
