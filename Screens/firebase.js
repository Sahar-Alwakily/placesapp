import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAHs0qhDEhoMCX0AxQTw0k9URGlMaTcxxo",
  authDomain: "projec4r.firebaseapp.com",
  projectId: "projec4r",
  storageBucket: "projec4r.appspot.com",
  messagingSenderId: "106195284689",
  appId: "1:106195284689:web:342c9edf49ac6874eacbf0",
  measurementId: "G-682QY290JM"
};

let app ;
if (firebase.apps.length === 0){
app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}
const auth = firebase.auth()
export {auth};