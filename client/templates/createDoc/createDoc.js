Template.createDoc.events({
  'click .create-doc-btn': function(e) {
    e.preventDefault();
    var defaultTitle = 'mdnerds';
    defaultTitle += '_' + Documents.find().count();
    Documents.insert({
      title: defaultTitle
    }, function(err, _id) {
      Router.go('workpane', {
        _id: _id
      });
    });
  },
});
