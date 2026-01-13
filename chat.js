import { db, storage } from './firebase.js';
import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const user = localStorage.getItem('user');
const messagesDiv = document.getElementById('messages');


onSnapshot(collection(db, 'messages'), snap => {
messagesDiv.innerHTML = '';
snap.forEach(doc => {
const m = doc.data();
messagesDiv.innerHTML += `<p><b>${m.user}:</b> ${m.text}</p>`;
});
});


send.onclick = async () => {
const text = messageInput.value;
if (!text) return;


await addDoc(collection(db, 'messages'), {
user,
text,
time: Date.now()
});


messageInput.value = '';
};
