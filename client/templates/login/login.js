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
      var email = t.find('#login-email').value,
        password = t.find('#login-password').value;
      Meteor.loginWithPassword(email, password, function(err) {
        if (err) {
          console.log('opps login failed');
        }else {
          onLogin();
        }
      });
      return false;
    }
  });

})(Template);
