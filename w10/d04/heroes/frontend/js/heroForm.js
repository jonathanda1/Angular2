(function() {

  angular.module('heroApp')
    .component('heroForm', {
      templateUrl: "heroForm.html",
      controller: HeroFormController,
      bindings: {
        // onAddHero is called in heroList.html line 3
        onAddHero: '&'
      }
    })

    function HeroFormController() {
      var vm = this;

      vm.newHero = {};
      vm.addHero = addHero;

      function addHero() {
         vm.onAddHero({newHero: vm.newHero});
      }
    }

})();
