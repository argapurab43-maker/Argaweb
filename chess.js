const game = new Chess();

const statusText = document.getElementById("status");

const board = Chessboard('board', {

  draggable: true,

  position: 'start',

  pieceTheme:
  'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',

  onDragStart: function(source, piece) {

    // game selesai
    if (game.game_over()) {
      return false;
    }

    // giliran putih/hitam
    if (
      (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)
    ) {
      return false;
    }
  },

  onDrop: function(source, target) {

    const move = game.move({
      from: source,
      to: target,
      promotion: 'q'
    });

    // langkah ilegal
    if (move === null) {
      return 'snapback';
    }

    updateStatus();
  },

  onSnapEnd: function() {
    board.position(game.fen());
  }

});

function updateStatus() {

  let moveColor = "Putih";

  if (game.turn() === 'b') {
    moveColor = "Hitam";
  }

  // checkmate
  if (game.in_checkmate()) {

    statusText.innerHTML =
      "🏆 Checkmate! " + moveColor + " kalah";

  }

  // draw
  else if (game.in_draw()) {

    statusText.innerHTML = "🤝 Draw!";

  }

  else {

    statusText.innerHTML =
      "Giliran: " + moveColor;

    // check
    if (game.in_check()) {
      statusText.innerHTML += " — CHECK!";
    }
  }
}

function resetGame() {

  game.reset();

  board.start();

  updateStatus();
}

function kembali() {
  window.location.href = "game.html";
}

updateStatus();
