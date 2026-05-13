const board = document.getElementById("board");

/* BIDAK CATUR */
const pieces = [
  "♜","♞","♝","♛","♚","♝","♞","♜",
  "♟","♟","♟","♟","♟","♟","♟","♟",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "♙","♙","♙","♙","♙","♙","♙","♙",
  "♖","♘","♗","♕","♔","♗","♘","♖"
];

/* BUAT PAPAN */
for(let i = 0; i < 64; i++){

  const square = document.createElement("div");

  square.classList.add("square");

  /* WARNA PAPAN */
  let row = Math.floor(i / 8);
  let col = i % 8;

  if((row + col) % 2 == 0){
    square.classList.add("white");
  }else{
    square.classList.add("green");
  }

  /* BIDAK */
  square.innerHTML = `<span class="piece">${pieces[i]}</span>`;

  board.appendChild(square);
}

/* TOMBOL KEMBALI */
function kembali(){
  window.location.href = "game.html";
}
