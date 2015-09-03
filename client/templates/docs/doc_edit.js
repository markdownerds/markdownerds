Template.docEdit.events({
  
  'submit form': function(e) {
    e.preventDefault();

    var curDocId = this._id;
    var docAttrs = {
      title: e.target.title.value
    };

    Docs.update(curDocId, {$set: docAttrs}, function(err) {
      if(err) {
        alert(err.reason);
      } else {
        Router.go('docPage', {_id: curDocId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      Docs.remove(this._id);
      Router.go('docsList');
    }
  }

})