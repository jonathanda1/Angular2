(function () {
    angular.module("heroApp", [])
        .component("heroList", {
          templateUrl: 'heroList.html',
          controller: HeroListController
        });


        function HeroListController() {
          var vm = this;

          vm.addNewHero = addNewHero;

    vm.heroes = [
      { "id": 11,
        "name": "Mr. Nice",
        "location": "Baltic City" },
      { "id": 12,
        "name": "Narco",
        "location": "Columbia" },
      { "id": 13,
        "name": "Bombasto",
        "location": "Cuba" },
      { "id": 14,
        "name": "Celeritas",
        "location": "Celery Town" },
      { "id": 15,
        "name": "Magenta",
        "location": "Transylvania" },
      { "id": 16,
        "name": "RubberMan",
        "location": "Rubber Town" },
      { "id": 17,
        "name": "Dynama",
        "location": "Detroit" },
      { "id": 18,
        "name": "Dr IQ",
        location: "General Assembly" },
      { "id": 19,
        "name": "Magma",
        location: "Volcano" },
      { "id": 20,
      "name": "Tornado",
      "location": "Kansas" }
    ];


    function addNewHero(hero) {
      vm.heroes.push(hero);
    }



        }





})();
