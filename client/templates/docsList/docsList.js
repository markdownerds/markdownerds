Template.docsList.helpers({
  documents: function() {
    return Documents.find({owner: {$ne: null}});
  }
});