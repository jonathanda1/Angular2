(function () {
  'use strict';

  angular.module("HappyAngular")
         .controller("HappyController", HappyController)

  function HappyController() {
    var vm = this;

    vm.allHappys = [
              {day: "Monday", level: 1, id: 1},
              {day: "Tuesday", level: 2, id: 2},
              {day: "Wednesday", level: 3, id: 3}

                    ];

    vm.addHappy = addHappy;
    vm.ids = 4
    vm.newHappy = {id: 0, day: '', level: ''}
    vm.remove = remove;

    function remove(removeHappy) {
      vm.allHappys = vm.allHappys.filter(function(happy) {
        return happy.id != removeHappy.id;
      })
    }

    function addHappy () {
      vm.allHappys.push({
        id: vm.ids,
        day: vm.newHappy.day,
        level: vm.newHappy.level
      })
      vm.ids++
      vm.newHappy.day = ''
      vm.newHappy.level = ''
    }

    function daysInRow () {
      return vm.allHappys.length
      }
    }
  }
}) ();
