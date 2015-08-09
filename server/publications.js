Meteor.publish('documents', function() {
  var uid = this.userId;
  return Documents.find({
    $or: [
      { owner: null },
      { owner: this.userId },
      { collaborators: {$in: [this.userId]} }
    ]
  });
});

Meteor.publish('allUsers', function() {
  return Meteor.users.find({}, {fields: {emails: 1}});
})