import firebase from 'firebase'

console.log('Firebase file loaded')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: 'rjs-auth.firebaseapp.com',
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: 'rjs-auth',
    storageBucket: 'rjs-auth.appspot.com',
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
}
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref()
