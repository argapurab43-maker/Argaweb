import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
}
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

import {
  getAuth
}
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLu1POb4qzy6yqZ9gz6xHu4u_HlJ8BMMY",
  authDomain: "argaa-web.firebaseapp.com",
  projectId: "argaa-web",
  storageBucket: "argaa-web.firebasestorage.app",
  messagingSenderId: "85804841719",
  appId: "1:85804841719:web:df2129e8586a445307f1f2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

window.kembali = function(){

  window.location.href = "novel.html";

}

window.publishNovel = async function(){

  let judul =
  document.getElementById("judul").value;

  let isi =
  document.getElementById("isiNovel").value;

  if(judul === "" || isi === ""){

    alert(
      "😭 Judul dan isi novel harus diisi"
    );

    return;

  }

  try{

    const user = auth.currentUser;

    await addDoc(
      collection(db, "novels"),
      {
        judul: judul,
        isi: isi,
        penulis: user.email,
        createdAt: Date.now()
      }
    );

    alert(
      "🔥 Novel berhasil dipublish"
    );

    window.location.href =
    "novel.html";

  }

  catch(error){

    alert(
      "❌ Error: " + error.message
    );

    console.log(error);

  }

}
