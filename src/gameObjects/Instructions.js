export default class Instructions {
	constructor() {
		this.text = "Press Space to start";
	}

	draw({ canvas, canvasCtx }) {
		const scale = window.devicePixelRatio;

		canvasCtx.fillStyle = "#535353";
		canvasCtx.font = "12px PressStart2P";
		canvasCtx.textAlign = "center";
		canvasCtx.textBaseline = "middle";

		console.log(canvas.width, canvas.height, canvas.style);

		canvasCtx.fillText(
			this.text,
			canvas.width / scale / 2,
			canvas.height / scale / 2
		);
	}

	update() {
		this.score++;
	}
}
