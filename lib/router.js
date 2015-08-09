Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    Meteor.subscribe('allUsers');
    Meteor.subscribe('documents');
    return;
  }
});

Router.route('/', {name: 'docsList'});
Router.route('/login', {name: 'login'});
Router.route('/workpane/:_id', {
  name: 'workpane',
  data: function() {
    return Documents.findOne(this.params._id);
  },
  action: function() {
    console.log('Setting doc id...');
    Session.set('docId', this.params._id);
    this.render();
  }
});

var requireLogin = function() {
  if (!Meteor.user()) {
    Documents.insert({
      title: "Untitled",
      createdAt: new Date(),
      owner: null,
      collaborators: []
    }, function(err, _id) {
      Session.set("docId", _id);
      Router.go('workpane', {_id: _id});
    });
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'workpane'});
Router.onBeforeAction(requireLogin, {only: 'docsList'});

/*Router.onStop(function() {
  Session.set('docId', null);
}, {only: 'workpane'});*/
