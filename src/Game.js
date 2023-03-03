import CurrentScore from "./gameObjects/CurrentScore.js";
import Instructions from "./gameObjects/Instructions.js";

export default class Game {
	constructor({ width, height } = { width: 600, height: 150 }) {
		const { canvas, canvasCtx } = this._createGameCanvas({ width, height });

		this._canvas = canvas;
		this._canvasCtx = canvasCtx;

		document.body.appendChild(canvas);
	}

	init() {
		const instructions = new Instructions();

		// TODO: Remove this test code
		this._canvasCtx.fillStyle = "lightgray";
		this._canvasCtx.fillRect(0, 0, this._canvas.width, this._canvas.height);

		instructions.draw({ canvas: this._canvas, canvasCtx: this._canvasCtx });
	}

	start() {
		this._gameObjects = [new CurrentScore()];

		this._startGameLoop();
	}

	_createGameCanvas({ width, height }) {
		const canvas = document.createElement("canvas");
		const canvasCtx = canvas.getContext("2d");

		// Set display size
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		// Set actual size in memory (scaled to account for extra pixel density)
		const scale = window.devicePixelRatio;
		canvas.width = Math.floor(width * scale);
		canvas.height = Math.floor(height * scale);

		// Normalize coordinate system to use CSS pixels
		canvasCtx.scale(scale, scale);

		return { canvas, canvasCtx };
	}

	_startGameLoop() {
		const step = () => {
			this._canvasCtx.clearRect(0, 0, this._canvas.width, this._canvas.height);

			// TODO: Remove this test code
			this._canvasCtx.fillStyle = "lightgray";
			this._canvasCtx.fillRect(0, 0, this._canvas.width, this._canvas.height);

			this._gameObjects.forEach((gameObject) => {
				gameObject.update();
				gameObject.draw({ canvas: this._canvas, canvasCtx: this._canvasCtx });
			});

			requestAnimationFrame(() => {
				step();
			});
		};

		step();
	}
}
