Template.docsList.helpers({
  docs: Docs.find({}, {sort: {createdAt:-1}}),
  createError: function() {
    return Session.get('createDoc.error');
  }
})

Template.docsList.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var doc = {
      title: e.target.title.value
    };

    Meteor.call('docInsert', doc, function(err, res) {
      if(err)
        return alert('[Error] ' + err);

      if(res.docExists)
        return alert('This document title already exists.');

      /*Router.go('docPage', res);*/
    });

  }
});