Template.preview.helpers({
  markdownCode: function() {
    
    if (! Template.instance().isEditorReady.get()) {
      return null;
    }
    
    var editor = ace.edit("editor");
    var newMd = Template.instance().newMd;

    editor.on('change', function(e) {
      newMd.set(editor.getValue());
    });

    return "\n" + newMd.get();

  }
})

/* after this element is created, editor is available */
Template.preview.onCreated(function () {
  this.isEditorReady = new ReactiveVar(false);
  this.newMd = new ReactiveVar("#Markdownerds");
});

Template.preview.onRendered(function() {
  this.isEditorReady.set(true);
});