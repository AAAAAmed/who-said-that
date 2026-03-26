let prompts = [
    "temp",
    "temp2",
    "temp3",
]
//let prompt = "";
let totalPlayers = 0;
let currentPlayer = 1;
let answers = [];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startGame() {
    prompt = getRandomElement(prompts);
    totalPlayers = parseInt(document.getElementById('player-count').value);

    if (!prompt || isNaN(totalPlayers)) return alert("Fill out the setup!");

    document.getElementById('display-prompt').innerText = prompt;
    updateTurnLabel();
    showScreen('input-screen');
}

function updateTurnLabel() {
    document.getElementById('player-turn-label').innerText = `Player ${currentPlayer}'s turn`;
}

function submitAnswer() {
    const input = document.getElementById('player-answer');
    if (!input.value) return;

    // Store the answer with a starting vote count of 0
    answers.push({ text: input.value, votes: 0 });
    input.value = "";

    if (currentPlayer < totalPlayers) {
        currentPlayer++;
        updateTurnLabel();
        alert("Pass the device to the next player!");
    } else {
        startVoting();
    }
}
