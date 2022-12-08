//? =============================================
//? ================= GYM =======================
//? =============================================

// const trainingBack = {
//   exercisesBack: [],
//   weight: 0,
//   reps: 0,
//   rest: 0,
//   done: false,
//   getExercises() {
//     return this.exercisesBack;
//   },
//   addExercise(exerciseName) {
//     this.exercisesBack.push(exerciseName);
//   },
//   addReps(valueReps) {
//     this.reps = valueReps;
//   },
//   addRest(valueRest) {
//     this.rest = valueRest;
//   },
//   doneExercise() {
//     if (`выполнены все подходы, или нажата кнопка закончить`) this.done = true;
//   },
// };

//? ==========================================
//? ============= Array Objects ==============
//? ==========================================

// const monday = [
//   {
//     exercise1: '',
//     reps: 0,
//     value: 0,
//     rest: 0,
//     getExercises() {
//       return this.exercise1;
//     },
//     addExercise(exerciseName) {
//       this.exercise1.push(exerciseName);
//     },
//     addReps(valueReps) {
//       this.reps = valueReps;
//     },
//     addRest(valueRest) {
//       this.rest = valueRest;
//     },
//   },
//   {
//     exercise2: '',
//     reps: 0,
//     value: 0,
//     rest: 0,
//     getExercises() {
//       return this.exercise2;
//     },
//     addExercise(exerciseName) {
//       this.exercise2.push(exerciseName);
//     },
//     addReps(valueReps) {
//       this.reps = valueReps;
//     },
//     addRest(valueRest) {
//       this.rest = valueRest;
//     },
//   },
// ];

//? ==========================================
//? ============= Playlist ===================
//? ==========================================

// const myPlaylist = {
//   name: 'My Playlist',
//   tracks: ['Track-1', 'Track-2', 'Track-3'],

//   getPlaylistName() {
//     return this.name;
//   },
//   getValueTracks() {
//     return this.tracks.length;
//   },
//   changeName(namePlaylist) {
//     this.name = namePlaylist;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
//   removeTrack(trackName) {
//     this.tracks.splice(this.tracks.indexOf(trackName), 1);
//   },
// };

// myPlaylist.addTrack('Track-4');
// myPlaylist.removeTrack('Track-2');

// console.log(myPlaylist);
// console.log(myPlaylist.getValueTracks());

//? =============================================
//? ================== Other ====================
//? =============================================

// const book = {
//   title: 'The Last Kindom',
//   author: 'Dernard Cornwell',
//   genres: ['historical', 'adventure'],
//   rating: 8.38,
//   location: {
//     country: 'USA',
//     city: 'NY',
//   },
// };
// console.log(Object.keys(book));
// console.log(Object.values(book));
// console.log(Object.entries(book));

// for (const key in book) {
//   if (book.hasOwnProperty(key)) {
//     console.log(`${key}: ${book[key]}`);
//   }
// }

//? ---------------------------

// const userSocial = {
//   likes: 100,
//   dislikes: 30,
// };

// const userKeys = Object.keys(userSocial);
// let reactions = 0;

// for (const key of userKeys) {
//   reactions += userSocial[key];
// }

// console.log(reactions);

//? ---------------------------

//? ======================================
//? ======================================
//? ======================================
