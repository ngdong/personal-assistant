
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: 'FB_API_KEY',
  authDomain: 'FB_AUTH_DOMAIN',
  databaseURL: 'FB_DATABASE_URL',
  projectId: 'FB_PROJECT_ID',
  storageBucket: 'FB_STORAGE_BUCKET',
  messagingSenderId: 'FB_MESSAGING_SENDER_ID',
  appId: 'FB_APP_ID',
  measurementId: 'FB_MEASUREMENT_ID'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
