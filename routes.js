(function() {
  'use strict';

  angular.module('formApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // route to show our basic form (/form)
    .state('form', {
      url: '/form',
      templateUrl: 'form.html',
      controller: 'formController'
    })

    // nested states
    // each of these sections have their own view

    // PROFILE
    // url will be nested as (/form/profile)
    .state('form.profile', {
      url: '/profile',
      templateUrl: 'form-profile.html'
    })

    // INTERESTS
    // url will be nested (/form/interests)
    .state('form.interests', {
      url: '/interests',
      templateUrl: 'form-interests.html'
    })

    // PAYMENT
    // url will be nested (/form/payment)
    .state('form-payment', {
      url: '/form/payment',
      templateUrl: 'form-payment.html'
    });

    // catch all routes
    // send users to the form page
    $urlRouterProvider.otherwise('/form/profile');
  });

})();
