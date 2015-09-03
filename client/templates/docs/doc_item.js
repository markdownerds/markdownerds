Template.docItem.helpers({
  isOwner: function() {
    if (!this.author)
      return false;
    return this.author._id === Meteor.userId();
  }
})