Template.docsList.helpers({
  documents: function() {
    return Documents.find({owner: {$exists: true}});
  }
});