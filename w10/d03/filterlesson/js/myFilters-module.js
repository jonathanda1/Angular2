(function() {
  'use strict';

  angular.module('myFilters', [])
    .filter('firstName', function() {
      return function(fullName) {
        return fullName.slice(0, fullName.indexOf(' '));
      };
    })
    .filter('ellipsis', function() {
      return function(text, trimSize) {
        var trimmed;
        var ellipsisCharCode = '\u2026';

        trimmed = text.slice(0, trimSize) + ellipsisCharCode;

        return trimmed;
      };
    })
    .filter('lastName', function() {
      return function(lastName) {
        return lastName.split(' ')[1]
      }
    })












})();
