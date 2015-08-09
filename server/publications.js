Meteor.publish('documents', function() {
  return Documents.find();
});