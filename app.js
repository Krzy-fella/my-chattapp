import { auth, db } from './firebase.js';
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const enterBtn = document.getElementById('enter');


enterBtn.onclick = async () => {
const username = document.getElementById('username').value;
const pin = document.getElementById('pin').value;


if (!username || !pin) return alert('Fill all fields');


await signInAnonymously(auth);


const userRef = doc(db, 'users', username);
const snap = await getDoc(userRef);


if (!snap.exists()) {
// New user
await setDoc(userRef, { pin });
} else {
// Old user
if (snap.data().pin !== pin) return alert('Wrong PIN');
}


localStorage.setItem('user', username);
window.location = 'chat.html';
};
