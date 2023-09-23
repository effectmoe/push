importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBUzc81wDAh0lelLF7PWlWhDAKSlCcDgx8",
    authDomain: "push-test-3c9f8.firebaseapp.com",
    projectId: "push-test-3c9f8",
    storageBucket: "push-test-3c9f8.appspot.com",
    messagingSenderId: "893833820578",
    appId: "1:893833820578:web:bbc7cd313af3bc0aee9afb",
    measurementId: "G-N3HXQYQ4MH"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('[BG] Received background message ', payload);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.message,
        tag: payload.data.tag,
        icon: 'logo.png',
        badge: 'badge.png',
        image: 'image.png',
        vibrate: [300, 100, 100, 100, 300],
        actions: [{
            action: 'こちらアクションAです',
            title: 'こんにちはA'
        },
        {
            action: 'こちらアクションBです',
            title: 'こんにちはB'
        }
        ]
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});