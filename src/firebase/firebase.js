import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Gas bill',
//     note: 'very expensive',
//     amount: '$1.23',
//     createdAt: 1234567
// });

// database.ref('expenses').push({
//     description: 'Water bill',
//     note: 'very wet',
//     amount: '$2.34',
//     createdAt: 2345678
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'home sweet home',
//     amount: '$1112.13',
//     createdAt: 3456789
// });

// database.ref().push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })

// const firebaseNotes = {
//     notes: {
//         fsdfsfadf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         cdascad: {
//             title: 'Another note!',
//             body: 'This is my another note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note!',
//     body: 'This is my another note'
// }]

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('name').set('Mike');
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     },
//     (e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
// name: 'Slava Perfilkin',
// age: 29,
// isSingle: true,
// location: {
//     city: 'Moscow',
//     country: 'Russia'
//   }
// }).then(() => {
//     console.log('Data is saved');
// }, (e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     location: {
//         city: 'Seattle',
//         country: 'Unated States'
//     }
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('Removed!');
// }, (e) => {
//     console.log('Error: ', e);
// });