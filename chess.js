const game = new Chess();

    if (game.game_over()) return false;

    if (
      (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)
    ) {
      return false;
    }
  },

  onDrop: function (source, target) {

    const move = game.move({
      from: source,
      to: target,
      promotion: 'q'
    });

    if (move === null) return 'snapback';

    updateStatus();
  },

  onSnapEnd: function () {
    board.position(game.fen());
  }
});

function updateStatus() {

  let moveColor = 'Putih';

  if (game.turn() === 'b') {
    moveColor = 'Hitam';
  }

  if (game.in_checkmate()) {
    statusText.innerHTML = '🏆 Checkmate! ' + moveColor + ' kalah';
  }

  else if (game.in_draw()) {
    statusText.innerHTML = '🤝 Draw!';
  }

  else {
    statusText.innerHTML = 'Giliran: ' + moveColor;

    if (game.in_check()) {
      statusText.innerHTML += ' — CHECK!';
    }
  }
}

function resetGame(){
  game.reset();
  board.start();
  updateStatus();
}

function kembali(){
  window.location.href = "game.html";
}

updateStatus();
