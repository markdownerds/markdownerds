Template.collaborators.events({
  'submit .add-collaborator': function(event) {

    event.preventDefault();

    var email = event.target.email.value;
    var docId = '';
    Meteor.call('addCollaborator', docId, email, function(error) {
      if(error) {
        console.error(error);
        return;
      }
      console.log("Succes! Yay!");
    })

  }
})