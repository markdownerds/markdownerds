// Template.header.helpers({});

Template.header.events({
    'click .sidebar-more': function(e) {
        e.preventDefault();
        $('.ui.sidebar').sidebar('toggle');
    }
});
