(function(exports){
  function testNoteDefaultsToFavouriteLanguage(){
    var note = new Note();
    assert.isTrue(note.text === "My favourite language is JavaScript")
  };
  testNoteDefaultsToFavouriteLanguage()
})(this);
