Docs = new Mongo.Collection('docs');

Docs.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});

Meteor.methods({
  docInsert: function(postAttrs) {
    
    check(Meteor.userId(), String);
    check(postAttrs, {
      title: String
    });

    var docWithSameTitle = Docs.findOne({title: postAttrs.title});
    if(docWithSameTitle) {
      return {
        docExists: true,
        _id: docWithSameTitle._id
      }
    }

    var user = Meteor.user();
    var post = _.extend(postAttrs, {
      author: {
        _id: user._id,
        username: user.username
      },
      createdAt: new Date()
    });

    var postId = Docs.insert(post);
    return {
      _id: postId
    };

  }
})