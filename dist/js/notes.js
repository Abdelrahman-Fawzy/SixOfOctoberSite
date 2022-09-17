function toggleCollapsedNotes() {
  let collapsedNotes = document.getElementById('collapsedNotes');
  let notCollapsedNotes = document.getElementById('notCollapsedNotes');
  collapsedNotes.classList.toggle('collapsed')
  notCollapsedNotes.classList.toggle('collapsed')
}

function openNoteTab(evt, NoteStatus) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(NoteStatus).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpens").click();