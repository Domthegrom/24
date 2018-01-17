import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDdZRfrGFvA7CikUJPzcPMQ2X33-Ja8MWw',
  databaseURL: 'https://app-51890.firebaseio.com'
}

const fb = firebase.initializeApp(firebaseConfig)

export default fb
