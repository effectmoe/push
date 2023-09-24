let db = admin.firestore()
db.collection('users')
  .add({
    name: 'Taro',
    country: 'Japan'
  }).then(ref => {
    console.log('Added document with ID: ', ref.id);
  });