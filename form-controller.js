(function() {
  'use strict';

  angular.module('formApp')
  .controller('formController', function($scope) {

    // store all our form data
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
      alert('awesome!');
    };
  });
})();