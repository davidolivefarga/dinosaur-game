export default class CurrentScore {
	constructor() {
		this.score = 0;
	}

	draw({ canvas, canvasCtx }) {
		const paddedScore = `${this.score}`.padStart(5, "0");

		canvasCtx.fillStyle = "#535353";
		canvasCtx.font = "12px PressStart2P";
		canvasCtx.textAlign = "right";
		canvasCtx.textBaseline = "top";
		canvasCtx.fillText(paddedScore, canvas.width - 605, 5);
	}

	update() {
		this.score++;
	}
}
