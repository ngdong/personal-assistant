
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: 'AIzaSyCbEY1-xsVo2n_HRg6qAe3p21XaQN8EaF8',
  authDomain: 'personal-assistant-204.firebaseapp.com',
  databaseURL: 'https://personal-assistant-204.firebaseio.com',
  projectId: 'personal-assistant-204',
  storageBucket: 'personal-assistant-204.appspot.com',
  messagingSenderId: '253108558302',
  appId: '1:253108558302:web:43294d17834f866853e54f',
  measurementId: 'G-GH4PT43P35'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();