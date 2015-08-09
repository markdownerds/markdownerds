
Template.workpane.helpers({
  initialize: function() {
    console.log('workpane initialized');
    Template.instance().markdownCode = new ReactiveVar("");
    var markdownCode = Template.instance().markdownCode;

    return function(editor) {
      editor.$blockScrolling = Infinity;
      editor.on('change', function() {
        markdownCode.set(editor.getValue());
      });
      editor.setTheme('ace/theme/dawn');
      editor.setShowPrintMargin(false);
      editor.renderer.setShowGutter(false);
      editor.getSession().setMode('ace/mode/markdown');
    };
  },

  markdownCode: function() {
    return "\n" + Template.instance().markdownCode.get();
  },

});

Template.workpane.events({
  'change .change-title': function(e) {
    e.preventDefault();
    var newTitle = e.target.value;
    console.log('new title added!?', e.target.value);
    if (!newTitle) {
      e.target.title.value = Documents.find({_id: this._id}).title;
      return;
    }
    Documents.update(this._id, {
      $set: {title: newTitle}
    });
  }
});
