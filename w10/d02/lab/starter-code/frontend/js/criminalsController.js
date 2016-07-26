(function() {
  "use strict";

  angular
    .module("TheCriminalsApp")
    .controller("CriminalsController", CriminalsController)

    CriminalsController.$inject = ['$http'];

    function CriminalsController($http) {
      var vm = this
      vm.all = [];
      vm.removeCriminal = removeCriminal;
      vm.addCriminal = addCriminal;
      vm.newCriminal = {};

      // GET
      $http
          .get("http://localhost:3000/api/criminals")
          // response is a large object. must parse through to get the value you want
          .then(function(response) {
            vm.all = response.data.criminals;
          }, function(err) {
            console.log(err)
          })

      // POST
      function addCriminal() {
        $http
          .post(
            "http://localhost:3000/api/criminals",
            vm.newCriminal
            ).then(function(response) {
              vm.all.push(response.data.criminal);
              vm.newCriminal = {};
            }, function (err) {
              console.log(err)
            })
      }
                  //vm.newCriminal will only return form data - response.data criminal will return the response's data and give the new criminal an id in the database

      // DELETE
      function removeCriminal(criminal) {
        console.log(criminal._id)
        $http
          .delete("http://localhost:3000/api/criminals/" + criminal._id).then(function() {
            vm.all.splice(vm.all.indexOf(criminal),1)
          })
      }
            // vm.all.indexOf(criminal),1)
            // in the array of all criminals, find the index of (criminal) and remove that 1

      // UPDATE





    }




})();
