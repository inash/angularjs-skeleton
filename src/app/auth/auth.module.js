import angular from 'angular';
import authLogin from './auth.login';
import authProfile from './auth.profile';

const MODULE_NAME = 'authModule';

/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('auth', {
      abstract: true,
      template: '<div ui-view></div>'
    })
    .state('auth.login', {
      url: '/login',
      component: 'authLogin'
    })
    .state('auth.profile', {
      url: '/profile',
      component: 'authProfile'
    });
}

angular.module(MODULE_NAME, [])
  .config(routesConfig)
  .component('authLogin', authLogin)
  .component('authProfile', authProfile);

export default MODULE_NAME;
