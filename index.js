import Game from "./src/Game.js";

const game = new Game();

game.init();

const onKeyDown = (event) => {
	if (event.code !== "Space") {
		return;
	}

	document.removeEventListener("keydown", onKeyDown);

	game.start();
};

document.addEventListener("keydown", onKeyDown);
