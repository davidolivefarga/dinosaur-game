export default class Game {
	constructor({ width, height }) {
		this.width = width;
		this.height = height;

		const { canvas, canvasContext } = this.createGameCanvas({ width, height });

		canvasContext.fillStyle = "green";
		canvasContext.fillRect(10, 10, 150, 100);

		document.body.appendChild(canvas);
	}

	createGameCanvas({ width, height }) {
		const canvas = document.createElement("canvas");
		const canvasContext = canvas.getContext("2d");

		// Set display size
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		// Set actual size in memory (scaled to account for extra pixel density)
		const scale = window.devicePixelRatio;
		canvas.width = Math.floor(width * scale);
		canvas.height = Math.floor(height * scale);

		// Normalize coordinate system to use CSS pixels
		canvasContext.scale(scale, scale);

		return { canvas, canvasContext };
	}
}
