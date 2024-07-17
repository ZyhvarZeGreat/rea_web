// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAmTn5VpzXhNsRXOJP_8GahKFRv7j43IjE",
  authDomain: "rea-test-6b58e.firebaseapp.com",
  projectId: "rea-test-6b58e",
  storageBucket: "rea-test-6b58e.appspot.com",
  messagingSenderId: "285326343426",
  appId: "1:285326343426:web:5c2fa94b0a9ae04f56d61b",
  measurementId: "G-V6XVQTYLYJ",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});