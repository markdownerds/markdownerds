;(function(Template) {
  var previousColorIndex = 0;
  var colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

  Template.docItem.helpers({
    getColor: function() {
      return colors[(previousColorIndex++) % colors.length];
    },
    isOwner: function() {
      return this.owner == Meteor.userId();
    },
    createdAtFormatted: function () {
      return moment(this.createdAt).format('MM/DD/YYYY, HH:MM');
    }
  });

  Template.docItem.events({
    'click .delete': function(e) {
      e.preventDefault();
      Documents.remove(this._id);
    }
  });
})(Template);
