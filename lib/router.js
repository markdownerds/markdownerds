Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('documents');
  }
});

Router.route('/', {name: 'docList'});
Router.route('/workpane/:_id', {
  name: 'workpane',
  data: function() {
    return Documents.findOne(this.params._id);
  }
});

Router.onBeforeAction('dataNotFound', {only: 'workpane'});