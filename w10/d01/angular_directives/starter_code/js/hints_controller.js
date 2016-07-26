(function() {
  'use strict';

  angular
      .module("hintApp")
      .controller("HintsController", HintsController);

  function HintsController() {
    var vm = this;

    // seed data from the mind of Tilda
    vm.allHints = [
        {
            id: 0,
            wisdom: "Not blinking isn't an option, but an advantage.",
            incorporated: false
        },
        {
            id: 1,
            wisdom: "You should only practice throat singing in the evening, when the sunlight is amber.",
            incorporated: false
        },
        {
            id: 2,
            wisdom: "The eclipse can give much power.",
            incorporated: false
        },
        {
            id: 3,
            wisdom: "Walk until no matter encroaches upon you. Shed your clothes and lay here. You are lonely/complete.",
            incorporated: true
        }
    ];

  vm.newHint = {
    id: 0,
    wisdom: "",
    incorporated: false
  }

  vm.addHint = addHint;
  // setting vm.ids = 4 b/c the last one was 3. now starts at 4
  vm.ids = 4
  vm.newHint = {id: 0, wisdom: '', incorporated: false};
  vm.remove  = remove;
  vm.changeIncorporated = changeIncorporated
  vm.numberToIncorporate = numberToIncorporate

  function remove(removeHint) {
    vm.allHints = vm.allHints.filter(function(hint) {
    // returns array of obj without the one with this id
      return hint.id != removeHint.id;
    });
  };

  function addHint() {
    vm.allHints.push({
      id:           vm.ids,
      wisdom:       vm.newHint.wisdom,
      incorporated: false
    });
    // ids add for each one created
    vm.ids++
    // resets the wisdom back to empty string
    vm.newHint.wisdom = ""
   }
  }

  function changeIncorporated(hint) {
    hint.incorporated = !hint.incorporated
  }

  function numberToIncorporate() {
    return vm.allHInts.filter(function (hint) {
      return !hint.incorporated;
    }).length
  }

})();
