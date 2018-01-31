const canvas = document.querySelector('#draw');

const context = canvas.getContext('2d');		//Canvas context can be 2d or 3d.

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 20;

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw (e) {
	if(!isDrawing)
		return; // stop the function when mouse button release;
	console.log(e);
	context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	context.beginPath();
	// start from
	context.moveTo(lastX, lastY);
	// go to
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();
	
	//get mouse position
	[lastX, lastY] = [e.offsetX, e.offsetY];

	//change the color
	hue++;
	hue = hue >= 359 ? 0 : hue;

	if(context.lineWidth >= 100 || context.lineWidth <= 1){
		direction = !direction;
	}

	direction ? context.lineWidth++ : context.lineWidth--;
	
}

/*Set the flags to control the draw function*/

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);