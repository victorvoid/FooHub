export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    //configure how the application deep linking paths are stored.
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app',
               {
                    url:'/',
                    component: 'homeComponent'
               })
        // .state('users',
        //        {
        //            url: '/users/:q',
        //            component: 'users'
        //        }
        //       );
}
