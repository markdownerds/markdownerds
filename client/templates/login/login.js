Accounts.onLogin(function() {

  if(Session.get("docId")) {
    console.log("The session has a doc id")
    doc = Documents.findOne(Session.get("docId"));
    if(doc && doc.owner == null) {
      console.log("the doc exists and the owner is null, so update.")
      Documents.update(doc._id, {
        $set: {
          owner: Meteor.userId()
        }
      }, function() {
        Router.go('workpane', {_id: doc._id});
      });
    }
    
  }

  Router.go('/');

});