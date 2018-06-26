(function(exports){
  function testNoteDefaultsToFavouriteLanguage(){
    var text = "My favourite language is JavaScript"
    var note = new Note(text);
    assert.isTrue(note.text === text)
  };
  testNoteDefaultsToFavouriteLanguage()
})(this);


(function(exports){
  function testsNoteListsStoresArrayOfNotes(){
    var noteList = new NoteList()
    noteList.addNote("Some text")
    var returnedArray = noteList.viewNotes()
    assert.isTrue(returnedArray[0].text === "Some text")
  };
  testsNoteListsStoresArrayOfNotes()
})(this);
