angular.module('starter.controllers', [])

  .controller('searchCtrl', function ($scope, $state, Repetitors) {
    $scope.goTo = function (subject, price, city) {
    var filtered = [];
      var persons = Repetitors.get();
      angular.forEach(persons, function(val, key) {
        if((val.subject == subject || subject == undefined) && (val.price == price || price == undefined) && (val.city == city || city == undefined)) {
          filtered.push(val)
        }
      });
      localStorage.setItem('repetitors_filtered', JSON.stringify(filtered));
      $state.go('tab.search-details');
      console.log(subject, price, city);
    }
  })
  .controller('searchResultsCtrl', function ($scope, $state, Repetitors) {
    $scope.goTo = function (id) {
      localStorage.setItem('person_id', id);
      $state.go('tab.search-person');
    }
    $scope.repetitors = JSON.parse(localStorage.getItem('repetitors_filtered'));//Repetitors.get();
    console.log($scope.repetitors);
  })
  .controller('searchPersonCtrl', function ($scope, $state, $ionicModal, $ionicPopup, Repetitors) {

    var person = Repetitors.get();
    var id = localStorage.getItem('person_id');
    angular.forEach(person, function(val, key){
      if(id == val.id) {
        $scope.name = val.name;
        $scope.price = val.price;
        $scope.phone = val.phone;
        $scope.city = val.city;
        $scope.experience = val.experience;
        $scope.subject = val.subject;
      }
    });

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
       var alertPopup = $ionicPopup.alert({
                        template: 'Спасибо, ждите связи'
                    });

                    alertPopup.then(function (res) {
                      $scope.modal.hide();
                    });
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
