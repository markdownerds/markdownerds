;(function(Template) {
  var previousColorIndex = 0;
  var colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

  Template.docItem.helpers({
    getColor: function() {
      return colors[(previousColorIndex++) % colors.length];
    }
  });

  Template.docItem.events({
    'click .delete': function(e) {
      e.preventDefault();
      Documents.remove(this._id);
    }
  });
})(Template);
