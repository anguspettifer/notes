(function(exports){
  function testNoteDefaultsToFavouriteLanguage(){
    var text = "My favourite language is JavaScript"
    var note = new Note(text);
    assert.isTrue(`note defaults to favourite language`, note.viewText() === text)
  };
  testNoteDefaultsToFavouriteLanguage()
})(this);


(function(exports){
  function testsNoteListsStoresArrayOfNotes(){
    var noteList = new NoteList()
    noteList.addNote("Some text")
    var noteArray = noteList.viewNotes()
    assert.isTrue(`note list stores array of notes`,noteArray[0].text === "Some text")
  };
  testsNoteListsStoresArrayOfNotes()
})(this);

(function(exports){
  function testsNoteListView(){
    var noteList = new NoteList()
    noteList.addNote("Favourite food: pesto")
    noteList.addNote("Favourite drink: seltzer")
    var noteListView = new NoteListView(noteList)
    var string = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
    assert.isTrue(`Display a note list`,noteListView.display() === string)
  };
  testsNoteListView()
})(this);
