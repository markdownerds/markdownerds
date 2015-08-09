Template.createDoc.events({

  "submit .new-doc": function(event) {
    console.log("test");
    event.preventDefault();
    var title = event.target.title.value;
    Documents.insert({
      title: title
    }, function(err, _id) {
      Router.go('workpane', {_id: _id})
    });
  }


})