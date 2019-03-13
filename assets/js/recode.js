	var mouse_x = 0;
	var mouse_y = 0;

	var canvas = document.getElementById('Canvas');
	var context = canvas.getContext('2d');

	canvas.addEventListener('mouseup', function(){
		context.beginPath();
		context.stroke();
	});	

	canvas.addEventListener('mousedown', function(){
		context.removeEventListener('mouseup');
	});

	canvas.addEventListener('mouseover', function (event) { 
		mouse_x = event.pageX - this.offsetTop;
		mouse_y = event.pageY - this.offsetLeft;
	});