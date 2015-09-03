Meteor.publish('allDocs', function() {
  return Docs.find()
});