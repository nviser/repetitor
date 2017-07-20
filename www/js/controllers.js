angular.module('starter.controllers', [])

  .controller('searchCtrl', function ($scope, $state, Repetitors) {
    $scope.goTo = function (subject, price, city) {
      var filtered = [];
      var persons = Repetitors.get();
      angular.forEach(persons, function (val, key) {
        if ((val.subject == subject || subject == undefined) && (val.price == price || price == undefined) && (val.city == city || city == undefined)) {
          filtered.push(val)
        }
      });
      localStorage.setItem('repetitors_filtered', JSON.stringify(filtered));
      $state.go('tab.search-details');
      //console.log(subject, price, city);
    }
  })
  .controller('searchResultsCtrl', function ($scope, $state, Repetitors) {
    $scope.goTo = function (id) {
      localStorage.setItem('person_id', id);
      $state.go('tab.search-person');
    }
    var ar = JSON.parse(localStorage.getItem('repetitors_filtered'));//Repetitors.get();
    var len = ar.length;
    var show = 4;
    var flag = 0, full = false;

    $scope.repetitors = ar.slice(0, show);
    $scope.spinner = true;
    $scope.loadMore = function () {
      if(!full){
        flag++;
        var temp = ar.slice(show*flag, show*flag + show);
        $scope.repetitors = $scope.repetitors.concat(temp);
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }

      if(show*flag + show >= len){
        full = true;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      } 
    }
  })
  .controller('searchPersonCtrl', function ($scope, $state, $ionicModal, $ionicPopup, Repetitors) {

    var persons = Repetitors.get();
    var id = localStorage.getItem('person_id');
    angular.forEach(persons, function (val, key) {
      if (id == val.id) {
        $scope.name = val.name;
        $scope.age = val.age;
        $scope.price = val.price;
        $scope.phone = val.phone;
        $scope.city = val.city;
        $scope.units = val.units;
        $scope.experience = val.experience;
        $scope.subject = val.subject;
        $scope.photo = val.face;
        $scope.id = val.id;
        $scope.person = val;
      }
    });
    $scope.flag = false;
    var favourites = JSON.parse(localStorage.getItem('repetitor_fav'));
    angular.forEach(favourites, function (val, key) {
      if (val.id == $scope.person.id) {
        $scope.flag = true;
      }
    });

    $ionicModal.fromTemplateUrl('templates/post.html', {
      scope: $scope
    }).then(function (modal) {
      //console.log('iMod');
      $scope.modal = modal;
    });
    $scope.addToFav = function (id) {

      var fav, flag = 0;
      var repetitor_fav = localStorage.getItem('repetitor_fav');
      if (repetitor_fav && angular.isArray(JSON.parse(repetitor_fav))) {
        fav = JSON.parse(repetitor_fav);
        angular.forEach(fav, function (val, key) {
          if (val.id == $scope.person.id) {
            flag = 1;
          }
        });

        if (!flag) {
          fav.push($scope.person);
          localStorage.setItem('repetitor_fav', JSON.stringify(fav));
          $scope.showAlert('Добавлено в избранное');
          $scope.flag = true;
        } /* else {
          $scope.showAlert('Этот преподаватель уже в избранном');
        } */
      } else {
        fav = [];
        fav.push($scope.person);
        localStorage.setItem('repetitor_fav', JSON.stringify(fav));
        $scope.showAlert('Добавлено в избранное');
        $scope.flag = true;
      }

    }
    $scope.openModal = function () {
      //console.log($scope.modal.show);
      $scope.modal.show();
    }
    $scope.closeModal = function (arg) {
      if (arg == 1) {
        var alertPopup = $ionicPopup.alert({
          template: 'Спасибо, ждите связи'
        });

        alertPopup.then(function (res) {
          $scope.modal.hide();
        });
      } else {
        $scope.modal.hide();
      }
    }

    $scope.showAlert = function (text) {
      var alertPopup = $ionicPopup.alert({
        template: text
      });

      alertPopup.then(function (res) {

      });
    }

  })

  .controller('FavCtrl', function ($scope, Chats, Repetitors, $state) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    //$scope.chats = Chats.all();
    $scope.favs = JSON.parse(localStorage.getItem('repetitor_fav'));
    $scope.delFav = function (fav) {
      var index = $scope.favs.indexOf(fav);
      $scope.favs.splice(index, 1);
      localStorage.setItem('repetitor_fav', JSON.stringify($scope.favs));
    }

    $scope.remove = function (chat) {
      Chats.remove(chat);
    };

    $scope.goTo = function (id) {
      localStorage.setItem('person_id', id);
      $state.go('tab.search-person');
    }
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
