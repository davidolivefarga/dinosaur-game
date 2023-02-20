export default class Game {
	static HEIGHT = 150;
	static WIDTH = 670;

	constructor({ width, height }) {
		this.width = width;
		this.height = height;

		const canvas = this.createGameCanvas({ width, height });

		const canvasContext = canvas.getContext("2d");

		canvasContext.fillStyle = "green";
		canvasContext.fillRect(10, 10, 150, 100);

		document.body.appendChild(canvas);
	}

	createGameCanvas({ width, height }) {
		const canvas = document.createElement("canvas");

		// Set display size
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		// Set actual size in memory (scaled to account for extra pixel density)
		const scale = window.devicePixelRatio;
		canvas.width = Math.floor(size * scale);
		canvas.height = Math.floor(size * scale);

		// Normalize coordinate system to use CSS pixels
		ctx.scale(scale, scale);

		return canvas;
	}
}
