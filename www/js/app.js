// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'/*, 'itemSwipe'*/])

  .run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      $rootScope.showAlert = function (text) {
        var alertPopup = $ionicPopup.alert({
          template: text
        });
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('tab.search', {
        url: '/search',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search.html',
            controller: 'searchCtrl'
          }
        }
      })
      .state('tab.search-details', {
        url: '/search/details',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search-results.html',
            controller: 'searchResultsCtrl'
          }
        }
      })
      .state('tab.search-person', {
        url: '/search/details/person',
        views: {
          'tab-search': {
            templateUrl: 'templates/tab-search-person.html',
            controller: 'searchPersonCtrl'
          }
        }
      })

      .state('tab.fav', {
        url: '/fav',
        cache: false,
        views: {
          'tab-fav': {
            templateUrl: 'templates/tab-fav.html',
            controller: 'FavCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/fav/:chatId',
        views: {
          'tab-fav': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/search');

    $ionicConfigProvider.tabs.position('bottom');
    //$ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.navBar.alignTitle('center');

  });
