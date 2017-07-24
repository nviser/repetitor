angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
  .factory('Repetitors', function() {

  var repetitors = [{
    id: 0,
    name: 'Корнієнко Тарас Валентинович',
    age: 30,
    city: 'Суми',
    phone: '+380952332447',
    address: 'рн.Шевченковський',
    subject: 'Біологія',
    price: 70,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 8,
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Людмила Василівна',
    age: 33,
    city: 'Лебедин',
    phone: '+380952366247',
    address: 'рн.Шевченковський',
    subject: 'Математика',
    price: 60,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 5,
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Ірина Володимирівна',
    age: 24,
    city: 'Шостка',
    phone: '+380983339447',
    address: 'рн.Шевченковський',
    subject: 'Математика',
    price: 65,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 15,
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Корнієнко Тарас Валентинович',
    age: 22,
    city: 'Тростянець',
    phone: '+380681312113',
    address: 'рн.Шевченковський',
    subject: 'Англійська мова',
    price: 40,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 12,
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Корнієнко Тарас Валентинович',
    age: 31,
    city: 'Суми',
    phone: 0936538380,
    address: 'рн.Шевченковський',
    subject: 'Українська мова',
    price: 50,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 11,
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'Мішкін Петро Валентинович',
    age: 37,
    city: 'Суми',
    phone: 0936538380,
    address: 'рн.Шевченковський',
    subject: 'Українська мова',
    price: 50,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 11,
    face: 'img/adam.jpg'
  }, {
    id: 6,
    name: 'Васькін Тарас Валентинович',
    age: 21,
    city: 'Суми',
    phone: 0936538380,
    address: 'рн.Шевченковський',
    subject: 'Українська мова',
    price: 50,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 11,
    face: 'img/mike.png'
  },{
    id: 7,
    name: 'Корнієнко Тарас Валентинович',
    age: 31,
    city: 'Суми',
    phone: 0936538380,
    address: 'рн.Шевченковський',
    subject: 'Українська мова',
    price: 50,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 11,
    face: 'img/mike.png'
  }, {
    id: 8,
    name: 'Їх Віра Вальдемарівна',
    age: 32,
    city: 'Суми',
    phone: 0936538380,
    address: 'рн.Шевченковський',
    subject: 'Українська мова',
    price: 50,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 11,
    face: 'img/adam.jpg'
  }, {
    id: 9,
    name: 'Світличний Микола',
    age: 23,
    city: 'Суми',
    phone: 0936538380,
    address: 'рн.Шевченковський',
    subject: 'Українська мова',
    price: 50,
    units: 'год',
    place: 'у викладача/в учня',
    experience: 11,
    face: 'img/mike.png'
  }];
  return {
    get: function () {
      return repetitors;
    }
  }
  });