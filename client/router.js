Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    Meteor.subscribe('allDocs')
  }
});

Router.route('/', {name: 'docsList'});
Router.route('/doc/:_id', {
  name: 'docPage',
  data: function() {
    return Docs.findOne(this.params._id);
  }
});
Router.route('/docs/:_id/edit', {
  name: 'docEdit',
  data: function() {
    return Docs.findOne(this.params._id);
  }
});

Router.onBeforeAction('dataNotFound', {only: 'docPage'});