if (!Meteor.userId()) {
  Documents.insert({
    title: "Untitled",
    createdAt: new Date(),
    owner: null,
    collaborators: []
  }, function(err, _id) {
    Session.set("docId", _id);
    Router.go('workpane', {_id: _id});
  });
}

Template.docsList.helpers({
  documents: function() {
    return Documents.find({owner: {$ne: null}});
  }
});