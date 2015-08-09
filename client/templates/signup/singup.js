;(function(Template) {
  var onSignup = function() {

  };

  Template.register.events({
    'submit #register-form': function(e, t) {
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
          // Success. Account has been created and the user
          // has logged in successfully.
          console.log('account has been created successfully');
        }

      });

      return false;
    }
  });

})(Template);
