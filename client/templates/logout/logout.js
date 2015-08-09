Template.logout.events({

  "submit .logout": function(event) {
    event.preventDefault();
    Meteor.logout(function() {
      Router.go('/');
    });
  }


})