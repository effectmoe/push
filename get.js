const admin = require('firebase-admin');

// '..../key.json'の部分を秘密鍵を置いた場所のパスに書き換えてください
let serviceAccount = require(process.cwd() + '/push-test-3c9f8-firebase-adminsdk-fcnte-43cd0d9393.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});