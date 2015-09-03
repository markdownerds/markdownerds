if(Docs.find().count() == 0) {
  Docs.insert({
    title: 'Document 1',
    createdAt: new Date()
  });
  Docs.insert({
    title: 'Document 2',
    createdAt: new Date()
  });
  Docs.insert({
    title: 'Document 3',
    createdAt: new Date()
  });
}