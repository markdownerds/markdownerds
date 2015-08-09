Template.sidebar.onRendered(function(){
  // $('.invite-success').hide();
});

Template.sidebar.events({
    'click': function(e){
        e.preventDefault();
        $('.ui.sidebar').sidebar('toggle');
    }
});