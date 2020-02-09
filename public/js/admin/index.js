'use strict';

var Backbone = require('backbone');

var User = require('./User');
var AdminView = require('./AdminView');

window.app.on('start', function () {
  var self = this;

  var Users = Backbone.Collection.extend({
    model: User,
    url: window.URL_PREFIX + '/admin/users'
  });

  var users = self.users = new Users();

  self.showAdmin = function () {
    users.fetch().then(function () {
      self.rootView.main.show(new AdminView({
        collection: users
      }));
    });
  };
});
