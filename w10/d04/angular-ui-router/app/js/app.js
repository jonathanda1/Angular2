angular
	.module('todoApp', ['ui.router'])
  .config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider,$urlRouterProvider) {
    // state = home, activates template at route: /
    $stateProvider
      .state('home', {
      url: '/',
      templateUrl: 'home.html',
    })
      .state('archive', {
      url: "/archive",
      templateUrl: "archive.html",
    });
    // looks at url, routes, states -- if it can't match.. otherwise this
    $urlRouterProvider.otherwise('/');
  }
