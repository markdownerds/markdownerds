Template.workpane.helpers({
  initEditor: function() {

    Template.instance().markdownCode = new ReactiveVar("");
    var markdownCode = Template.instance().markdownCode;
    // markdownCode.setOptions({
    //     highlight: function(code) {
    //         return require('highlight.js').highlightAuto(code).value;
    //     }
    // });

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
  },

});