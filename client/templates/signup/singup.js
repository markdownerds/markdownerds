;(function(Template) {
  var onSignupSuccess = function() {
    Router.go('/');
  };
  var onSignupFail = function() {
    // TODO: do some form validation
  };

  // Template.signup.onRendered = function() {
  //   TODO: we debug this later
  //   console.log('signupe rendedred!');
  //   $('.ui.form')
  //     .form({
  //       fields: {
  //         email: {
  //           identifier: 'email',
  //           rules: [{
  //             type: 'empty',
  //             prompt: 'Please enter your e-mail'
  //           }, {
  //             type: 'email',
  //             prompt: 'Please enter a valid e-mail'
  //           }]
  //         },
  //         password: {
  //           identifier: 'password',
  //           rules: [{
  //             type: 'empty',
  //             prompt: 'Please enter your password'
  //           }, {
  //             type: 'length[6]',
  //             prompt: 'Your password must be at least 6 characters'
  //           }]
  //         }
  //       }
  //     });

  // };

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
