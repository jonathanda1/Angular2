(function() {
  'use strict';

  angular.module("KittyLab")
         .controller("KittiesController", KittiesController)

  function KittiesController () {
    var vm = this;
       vm.allKitties = [
        		{
        			catName: 'Karl',
        			monthsOld: 5,
        			gender: 'boy',
        			image: "images/carl.png",
        			adopted: true,
              id: 0
        		},
        		{
        			catName: 'Jack',
        			monthsOld: 4,
        			gender: 'boy',
        			image: "images/jack.png",
        			adopted: false,
              id: 1
        		},
        		{
        			catName: 'Oscar',
        			monthsOld: 2,
        			gender: 'boy',
        			image: "images/oscar.png",
        			adopted: false,
              id: 2
        		},
        		{
        			catName: 'Princess Mew',
        			monthsOld: 3,
        			gender: 'girl',
        			image: "images/princessmew.png",
        			adopted: false,
              id: 3
        		}
        ];

        vm.addKitty = addKitty;
        vm.remove = remove;
        vm.ids = 3

        function addKitty() {
          vm.allKitties.push({
            id: vm.ids,
            catName: vm.newKitty.catName,
            monthsOld: vm.newKitty.monthsOld
          });
          vm.ids ++
          vm.newKitty.catName = ''
          vm.newKitty.monthsOld = ''
        }

        function remove(removeKitty) {
          vm.allKitties = vm.allKitties.filter(function(kitty) {
            return kitty.id != removeKitty.id
          });
        };

    }
})();
