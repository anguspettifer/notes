(function(exports){
  function NoteList(){
    this.list = []
  };

  NoteList.prototype.addNote = function (text) {
    var note = new Note(text);
    this.list.push(note);
  };

  NoteList.prototype.viewNotes = function () {
    return this.list
  };

  exports.NoteList = NoteList;
})(this);
