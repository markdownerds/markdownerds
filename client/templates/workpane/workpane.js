Template.workpane.helpers({
  initialize: function() {
    Template.instance().markdownCode = new ReactiveVar("");
    var markdownCode = Template.instance().markdownCode;

    return function(editor) {
      editor.$blockScrolling = Infinity;
      editor.on('change', function() {
        markdownCode.set(editor.getValue());
      });
      editor.insert("#Markdownerds!");
      editor.setTheme('ace/theme/dawn');
      editor.setShowPrintMargin(false);
      editor.renderer.setShowGutter(false);
      editor.getSession().setMode('ace/mode/markdown');
    };
  },

  markdownCode: function() {
    return "\n" + Template.instance().markdownCode.get();
  }


});

Template.workpane.events({
  'click .setting-more': function(e) {
    e.preventDefault();
    $('.ui.sidebar').sidebar('toggle');
  }
});