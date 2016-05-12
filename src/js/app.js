angular.module('gymnastics', ['ui.router'])

angular.module('gymnastics').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'mainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html',
      controller: 'mainCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './views/contact.html',
      controller: 'mainCtrl'
    });
    $urlRouterProvider.otherwise('/');
})
