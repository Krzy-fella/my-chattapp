import { auth, db } from './firebase.js';
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById('enter').onclick = async () => {
  const username = document.getElementById('username').value;
  const pin = document.getElementById('pin').value;

  if (!username || !pin) {
    alert('Fill all fields');
    return;
  }

  try {
    // Sign in
    await signInAnonymously(auth);

    const userRef = doc(db, 'users', username);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, { pin });
    } else {
      if (snap.data().pin !== pin) {
        alert('Wrong PIN');
        return;
      }
    }

    localStorage.setItem('user', username);
    window.location.href = 'chat.html';

  } catch (error) {
    console.error(error);
    alert('Firebase error: ' + error.message);
  }
};
