Meteor.methods({
  addCollaborator: function(docId, collabEmail) {

    if( !Meteor.userId() ) {
      throw new Meteor.Error('not-authorized', 'You are not logged in.');
    }

    var doc = Documents.findOne({_id: docId, owner: Meteor.userId});
    console.log(doc);
    if(!doc) {
      throw new Meteor.Error('doc-not-found', 'Document not found or you are not the owner.');
    }

    var user = Meteor.users.findOne({ emails: { $elemMatch: { address: collabEmail } } });
    console.log(user);
    if(!user) {
      throw new Meteor.Error('user-not-found', 'The user was not found.');
    }
    
    if(user._id == Meteor.userId()) {
      throw new Meteor.Error('cant-add-yourself', 'You can not add yourself as a collaborator');
    }

    console.log('Already=in check')
    if(doc.collaborators.indexOf(user._id) != -1) {
      throw new Meteor.Error('collab-already-in', 'This collaborator already exists.');
    }

    Documents.update(doc._id, {
      $push: {
        collaborators: user._id
      }
    }, function(err) {
      if(err) {
        throw new Meteor.Error('err-add-collab', 'Error adding the collaborator. Try again.');
      }
    });

  },

  deleteCollaborator: function(docId, uid) {
    var doc = Documents.findOne({_id: docId, owner: Meteor.userId});
    console.log(doc);
    if(!doc) {
      throw new Meteor.Error('doc-not-found', 'Document not found or you are not the owner.');
    }
    Documents.update(doc._id, {
      $pull: {collaborators: uid}
    }, function(err) {
      if(err) {
        throw new Meteor.Error('err-add-collab', 'Error adding the collaborator. Try again.');
      }
    });
  }

});
