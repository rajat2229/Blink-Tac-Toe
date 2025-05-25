const board = Array(9).fill(null);
const emojiCategories = {
  player1: ['🐶', '🐱', '🐵', '🐰'],
  player2: ['🍕', '🍟', '🍔', '🍩']
};

let currentPlayer = 'player1';
const emojiHistory = { player1: [], player2: [] };
const emojiPosition = { player1: [], player2: [] };
let gameOver = false;

const winCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

const boardDiv = document.getElementById('board');
const status = document.getElementById('status');

function drawBoard() {
  boardDiv.innerHTML = '';
  board.forEach((val, idx) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = val || '';
    cell.addEventListener('click', () => handleClick(idx));
    boardDiv.appendChild(cell);
  });
}

function getRandomEmoji(player) {
  const category = emojiCategories[player];
  return category[Math.floor(Math.random() * category.length)];
}

function handleClick(index) {
  if (board[index] || gameOver) return;

  const emoji = getRandomEmoji(currentPlayer);
  const history = emojiHistory[currentPlayer];
  const positions = emojiPosition[currentPlayer];

  if (history.length === 3) {
    const oldIndex = positions[0];
    if (oldIndex === index) return; // can't overwrite first
    board[oldIndex] = null;
    history.shift();
    positions.shift();
  }

  board[index] = emoji;
  history.push(emoji);
  positions.push(index);
  drawBoard();

  if (checkWin(positions)) {
    status.textContent = `${currentPlayer === 'player1' ? 'Player 1' : 'Player 2'} Wins!`;
    document.body.classList.add('win');
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
    status.textContent = `${currentPlayer === 'player1' ? 'Player 1' : 'Player 2'}'s Turn`;
  }
}

function checkWin(pos) {
  return winCombos.some(combo => combo.every(i => pos.includes(i)));
}

function restart() {
  document.body.classList.remove('win');
  for (let i = 0; i < 9; i++) board[i] = null;
  emojiHistory.player1 = [];
  emojiHistory.player2 = [];
  emojiPosition.player1 = [];
  emojiPosition.player2 = [];
  currentPlayer = 'player1';
  gameOver = false;
  status.textContent = "Player 1's Turn";
  drawBoard();
}

drawBoard();
