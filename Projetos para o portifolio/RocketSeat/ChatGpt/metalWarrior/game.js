// Define os elementos da tela do jogo
var gameScreen = document.getElementById('#game-screen');
var player = document.getElementById('#player');
var scoreDisplay = document.getElementById('#score');
var healthDisplay = document.getElementById('#health');

// Define as variáveis do jogo
var score = 0;
var health = 100;
var enemyCount = 3;

// Define a lógica do jogo
function update() {
	// Move os inimigos
	var enemies = document.getElementsByClassName('enemy');
	for (var i = 0; i < enemies.length; i++) {
		enemies[i].style.left = parseInt(enemies[i].style.left) - 2 + 'px';
		if (parseInt(enemies[i].style.left) < -40) {
			enemies[i].style.left = gameScreen.offsetWidth + 40 + 'px';
		}
	}

	// Atualiza a pontuação e a vida do jogador
	scoreDisplay.innerHTML = 'Score: ' + score;
	healthDisplay.innerHTML = 'Health: ' + health;

	// Verifica colisões entre o jogador e os inimigos
	for (var i = 0; i < enemies.length; i++) {
		if (isColliding(player, enemies[i])) {
			health -= 10;
			if (health <= 0) {
				gameOver();
			}
		}
	}

	// Verifica se o jogador venceu o jogo
	if (score >= 100) {
		gameWon();
	}
}

// Define as ações do
