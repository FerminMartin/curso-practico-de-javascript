const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

const notesWithCredit = notes.map(function(noteObject){
  return noteObject.note * noteObject.credit;
});