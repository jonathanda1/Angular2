(function () {
  angular.module('heroApp').component('heroDetail', {
    templateUrl: 'heroDetail.html',       // use camel case here. Angular converts to hero-detail
    controller: HeroDetailController,
    bindings: {
      hero: '='
    }
  });
    function HeroDetailController() {

    }





})();
