angular.module('starter.controllers', [])

  .controller('searchCtrl', function ($scope, $state) {
    $scope.goTo = function () {
      $state.go('tab.search-details');
    }
  })
  .controller('searchDetailsCtrl', function ($scope, $state) {
    $scope.goTo = function () {
      $state.go('tab.search-person');
    }
  })
  .controller('searchPersonCtrl', function ($scope, $state, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/post.html', {
      scope: $scope
    }).then(function (modal) {
      //console.log('iMod');
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      //console.log($scope.modal.show);
      $scope.modal.show();
    }
    $scope.closeModal = function () {
      $scope.modal.hide();
    }

  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
