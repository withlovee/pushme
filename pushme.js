User = new Mongo.Collection("users");

if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault('counter', 0);

  var user;

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    user: function() {
      user = User.findOne({name: 'vee'});
      return user;
    },
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      // console.log(user);
      User.update(user._id, {
        $set: { $inc: { counter: 1 } }
      });
    }
  });
}

if (Meteor.isServer) {

  Meteor.startup(function () {

    user = User.findOne({name: 'vee'});
    console.log(user);

  });
}
