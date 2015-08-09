Template.docItem.events({
  'click .delete': function(e) {
    e.preventDefault();
    Documents.remove(this._id);
  }
})