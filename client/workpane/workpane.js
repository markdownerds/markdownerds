Template.workpane.helpers({
  initEditor: function() {

    Template.instance().markdownCode = new ReactiveVar("");
    var markdownCode = Template.instance().markdownCode;

    return function(editor) {
      editor.$blockScrolling = Infinity;
      editor.on('change', function() {
        markdownCode.set(editor.getValue());
      });
      editor.insert("#Markdownerds!");
      editor.setTheme('ace/theme/monokai');
      editor.setShowPrintMargin(false);
      editor.getSession().setMode('ace/mode/markdown');
    };
  },

  markdownCode: function() {
    return "\n" + Template.instance().markdownCode.get();
  }
});