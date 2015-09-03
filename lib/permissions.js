ownsDocument = function(userId, doc) {
  return doc && doc.author && doc.author._id === userId;
}