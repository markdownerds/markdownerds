;(function(Template) {

  var onLogin = function() {
    if (Session.get("docId")) {
      console.log("The session has a doc id");
      doc = Documents.findOne(Session.get("docId"));
      if (doc && !doc.owner) {
        console.log("the doc exists and the owner is null, so update.");
        Documents.update(doc._id, {
          $set: {
            owner: Meteor.userId()
          }
        }, function() {
          Router.go('workpane', {
            _id: doc._id
          });
        });
      }

    }
    Router.go('/');
  };

  Template.login.events({
    'submit #login-form': function(e, t) {
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-email').value,
        password = t.find('#login-password').value;

      // Trim and validate your fields here....

      // If validation passes, supply the appropriate fields to the
      // Meteor.loginWithPassword() function.
      Meteor.loginWithPassword(email, password, function(err) {
        if (err) {
          console.log('opps login failed');
        }
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        else {
          onLogin();
        }
        // The user has been logged in.
      });
      return false;
    }
  });

})(Template);
