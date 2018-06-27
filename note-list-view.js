(function(exports){
  function NoteListView(noteList){
    this.noteList = noteList
  };

  NoteListView.prototype.display = function () {
    var listHTML = "<ul>"
    var noteArray = this.noteList.viewNotes()
    noteArray.forEach(function(note){
      listHTML += `<li><div>${note.text}</div></li>`;
    })

    listHTML += `</ul>`
    return listHTML
  };

  exports.NoteListView = NoteListView;
})(this);
