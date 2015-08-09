;(function(Template) {
  var onSignupSuccess = function() {
    loginHook();
  };
  var onSignupFail = function() {
    // TODO: do some form validation
  };

  /*Template.signup.onCreated = function() {
    console.log('signup rendered');
    $('.ui.sidebar').removeClass('visible');
  };*/

  Template.signup.events({
    'submit #signup-form': function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value,
        password = t.find('#account-password').value;

      // Trim and validate the input

      Accounts.createUser({
        email: email,
        password: password
      }, function(err) {
        if (err) {
          console.log('oops... failed to create an account');
        } else {
          onSignupSuccess();
        }
      });

      return false;
    }
  });

})(Template);
