Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('documents');
  }
});

Router.route('/', {name: 'docsList'});
Router.route('/login', {name: 'login'});
Router.route('/signup', {name: 'signup'});
Router.route('/workpane/:_id', {
  name: 'workpane',
  data: function() {
    return Documents.findOne(this.params._id);
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
};

Router.onBeforeAction('dataNotFound', {only: 'workpane'});
Router.onBeforeAction(requireLogin, {only: 'docsList'});