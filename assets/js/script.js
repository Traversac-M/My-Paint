/*
|--------------------------------------------------------------------------
| Get Canvas DOM
|--------------------------------------------------------------------------
|
*/

    var canvas = document.getElementById("Canvas");
    var context = canvas.getContext("2d");

/*
|--------------------------------------------------------------------------
| Defaults Params
|--------------------------------------------------------------------------
|
*/

    var mouse_x = 0;
    var mouse_y = 0;

    var color;
    var currentColor = document.getElementById("current");
    currentColor.style.background = "black";

    var canvasWidth = document.getElementById("changeWidth");
    var canvasHeight = document.getElementById("changeHeight");

    canvas.width = 1400;
    canvas.height = 750;

/*
|--------------------------------------------------------------------------
| Drawing function
|--------------------------------------------------------------------------
|   1st : The function to draw
|   2nd : Get the mouse click position
|   3rd : Return the drawing function and allow you to use multiple colors
|   4th : Allow you to unclick and move your mouse without drawing
|
*/

    function drawing() {
        context.lineTo(mouse_x, mouse_y);
        context.stroke();
    };

    canvas.addEventListener("mousemove", function(event) {
        mouse_x = event.pageX - this.offsetLeft;
        mouse_y = event.pageY - this.offsetTop;
    });

    canvas.addEventListener("mousedown", startDraw); 
    function startDraw() {
        context.beginPath();
        context.moveTo(mouse_x, mouse_y);
        canvas.addEventListener("mousemove", drawing);
        canvas.removeEventListener("click", line);        
    }

    canvas.addEventListener("mouseup", function() {
        canvas.removeEventListener("mousemove", drawing);
    });

/*
|--------------------------------------------------------------------------
| Tools functions
|--------------------------------------------------------------------------
| Pencil tool
|--------------------------------------------------------------------------
*/
    document.getElementById("pencil").addEventListener("click", function() {
        canvas.addEventListener("mousedown", startDraw);
        document.removeEventListener("click", square);     
        context.lineWidth = 1;
        context.strokeStyle = color;
        currentColor.style.background = color;
    });

/*
|--------------------------------------------------------------------------
| Line tool
|--------------------------------------------------------------------------
*/
    document.getElementById("line").addEventListener("click", line);

    function line() {
        canvas.removeEventListener('mousedown', startDraw);
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", testest);
        function testest(event) {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 1;
                context.moveTo(readClick[0], readClick[1]);
                context.lineTo(mouse_x, mouse_y);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        }
    }

/*
|--------------------------------------------------------------------------
| Square tool
|--------------------------------------------------------------------------
*/

    document.getElementById("square").addEventListener("click", square);

    function square() {
        canvas.removeEventListener('mousedown', startDraw);

        var click = 0;
        var readClick = [];

        canvas.addEventListener("click", squareCreate);

        function squareCreate() {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 1;
                context.moveTo(readClick[0], readClick[1]);
                context.rect(mouse_x, mouse_y, readClick[0] , readClick[1]);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        }
    }

/*
|--------------------------------------------------------------------------
| Circle tool
|--------------------------------------------------------------------------
*/

    document.getElementById("circle").addEventListener("click", circle);

    function circle() {
        canvas.removeEventListener('mousedown', startDraw);
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
                if (click != 1) {
                    click++;
                } else {
                    context.beginPath();
                    context.lineWidth = 1;
                    context.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
                    context.stroke();
                    click = 0;
                }  
                readClick = [mouse_x, mouse_y];
            });
    }

/*
|--------------------------------------------------------------------------
| Eraser tools
|--------------------------------------------------------------------------
*/

    document.getElementById("erase").addEventListener("click", function() {
        canvas.addEventListener('mousedown', startDraw);        
        context.lineWidth = 10;
        context.strokeStyle = "white";
    });

    document.getElementById("reset").addEventListener("click", function() {
        if(confirm("Reset all ?")) {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    });

/*
|--------------------------------------------------------------------------
| Pencil Size Functions
|--------------------------------------------------------------------------    
|
*/

    document.getElementById("penSize1").addEventListener("click", function(){
        context.lineWidth = 1;
        context.strokeStyle = color;
        currentColor.style.background = color;
    });

    document.getElementById("penSize2").addEventListener("click", function(){
        context.lineWidth = 10;
        context.strokeStyle = color;
        currentColor.style.background = color;
    });

    document.getElementById("penSize3").addEventListener("click", function(){
        context.lineWidth = 25;
        context.strokeStyle = color;
        currentColor.style.background = color;
    });

    document.getElementById("penSize4").addEventListener("click", function(){
        context.lineWidth = 50;
        context.strokeStyle = color;
        currentColor.style.background = color;
    });

/*
|--------------------------------------------------------------------------
| Line Size Functions
|--------------------------------------------------------------------------    
| Line Size 1
|--------------------------------------------------------------------------    
*/

    document.getElementById("lineSize1").addEventListener("click", lineSize1);

    function lineSize1() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event){
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 1;
                context.moveTo(readClick[0], readClick[1]);
                context.lineTo(mouse_x, mouse_y);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|--------------------------------------------------------------------------
| Line Size 2
|--------------------------------------------------------------------------    
*/

    document.getElementById("lineSize2").addEventListener("click", lineSize2);

    function lineSize2() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event){ 
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 10;
                context.moveTo(readClick[0], readClick[1]);
                context.lineTo(mouse_x, mouse_y);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|--------------------------------------------------------------------------
| Line Size 3
|--------------------------------------------------------------------------    
*/

    document.getElementById("lineSize3").addEventListener("click", sizeLine3);

    function sizeLine3() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event){ 
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 25;
                context.moveTo(readClick[0], readClick[1]);
                context.lineTo(mouse_x, mouse_y);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|--------------------------------------------------------------------------
| Line Size 4
|--------------------------------------------------------------------------    
*/

    document.getElementById("lineSize4").addEventListener("click", sizeLine4);

    function sizeLine4() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event){ 
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 50;
                context.moveTo(readClick[0], readClick[1]);
                context.lineTo(mouse_x, mouse_y);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|--------------------------------------------------------------------------
| Square Size Functions
|--------------------------------------------------------------------------    
| Square Size 1
|-------------------------------------------------------------------------- 
*/

    document.getElementById("squareSize1").addEventListener("click", sizeSquare1);

    function sizeSquare1() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 1;
                context.moveTo(readClick[0], readClick[1]);
                context.rect(mouse_x, mouse_y, readClick[0] , readClick[1]);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|-------------------------------------------------------------------------- 
| Square Size 2
|-------------------------------------------------------------------------- 
*/


    document.getElementById("squareSize2").addEventListener("click", sizeSquare2);

    function sizeSquare2() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 10;
                context.moveTo(readClick[0], readClick[1]);
                context.rect(mouse_x, mouse_y, readClick[0] , readClick[1]);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|-------------------------------------------------------------------------- 
| Square Size 3
|-------------------------------------------------------------------------- 
*/

    document.getElementById("squareSize3").addEventListener("click", sizeSquare3);

    function sizeSquare3() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 25;
                context.moveTo(readClick[0], readClick[1]);
                context.rect(mouse_x, mouse_y, readClick[0] , readClick[1]);
                context.strokeStyle = color;
                context.stroke();
                click = 0;
            }
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|-------------------------------------------------------------------------- 
| Square Size 4 Filled
|-------------------------------------------------------------------------- 
*/

    document.getElementById("squareSize4").addEventListener("click", sizeSquare4);

    function sizeSquare4() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 10;
                context.moveTo(readClick[0], readClick[1]);
                context.fillStyle = color;
                context.fillRect(mouse_x, mouse_y, readClick[0] , readClick[1]);
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|--------------------------------------------------------------------------
| Circle Size Functions
|--------------------------------------------------------------------------    
| Circle Size 1
|-------------------------------------------------------------------------- 
*/

    document.getElementById("circleSize1").addEventListener("click", sizeCircle1);

    function sizeCircle1() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
                if (click != 1) {
                    click++;
                } else {
                    context.beginPath();
                    context.lineWidth = 1;
                    context.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
                    context.stroke();
                    click = 0;
                }  
                readClick = [mouse_x, mouse_y];
            });
    }
/*
|--------------------------------------------------------------------------   
| Circle Size 2
|-------------------------------------------------------------------------- 
*/

    document.getElementById("circleSize2").addEventListener("click", sizeCircle2);

    function sizeCircle2() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 10;
                context.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|--------------------------------------------------------------------------   
| Circle Size 3
|-------------------------------------------------------------------------- 
*/

    document.getElementById("circleSize3").addEventListener("click", sizeCircle3);

    function sizeCircle3() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.lineWidth = 25;
                context.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|--------------------------------------------------------------------------   
| Circle Size 4
|-------------------------------------------------------------------------- 
*/

    document.getElementById("circleSize4").addEventListener("click", sizeCircle4);

    function sizeCircle4() {
        var click = 0;
        var readClick = [];
        canvas.addEventListener("click", function(event) {
            if (click != 1) {
                click++;
            } else {
                context.beginPath();
                context.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
                context.fillStyle = color;
                context.fill();
                context.stroke();
                click = 0;
            }  
            readClick = [mouse_x, mouse_y];
        });
    }

/*
|--------------------------------------------------------------------------
| Eraser Size Functions
|--------------------------------------------------------------------------    
|
*/  
    document.getElementById("eraseSize1").addEventListener("click", function() {
        context.lineWidth = 10;
        context.strokeStyle = "white";
    });

    document.getElementById("eraseSize2").addEventListener("click", function() {
        context.lineWidth = 25;
        context.strokeStyle = "white";
    });

    document.getElementById("eraseSize3").addEventListener("click", function() {
        context.lineWidth = 50;
        context.strokeStyle = "white";
    });

    document.getElementById("eraseSize4").addEventListener("click", function() {
        context.lineWidth = 150;
        context.strokeStyle = "white";
    });

/*
|--------------------------------------------------------------------------
| Colors functions 1st line
|--------------------------------------------------------------------------
|
*/
     document.getElementById("black").addEventListener("click", function() {
        context.strokeStyle = color = "black";
        currentColor.style.background = color;
    });

     document.getElementById("grey").addEventListener("click", function() {
        context.strokeStyle = color = "grey";
        currentColor.style.background = color;
    });

     document.getElementById("red").addEventListener("click", function() {
        context.strokeStyle = color = "red";
        currentColor.style.background = color;
    });

     document.getElementById("orange").addEventListener("click", function() {
        context.strokeStyle = color = "orange";
        currentColor.style.background = color;
    });

     document.getElementById("yellow").addEventListener("click", function() {
        context.strokeStyle = color = "yellow";
        currentColor.style.background = color;
    });

     document.getElementById("green").addEventListener("click", function() {
        context.strokeStyle = color = "green";
        currentColor.style.background = color;
    });

     document.getElementById("blue").addEventListener("click", function() {
        context.strokeStyle = color = "blue";
        currentColor.style.background = color;
    });

     document.getElementById("purple").addEventListener("click", function() {
        context.strokeStyle = color = "purple";
        currentColor.style.background = color;
    });

/*
|--------------------------------------------------------------------------
| Colors functions 2nd line
|--------------------------------------------------------------------------
|
*/

     document.getElementById("white").addEventListener("click", function() {
        context.strokeStyle = color = "white";
        currentColor.style.background = color;
    });

     document.getElementById("lightgrey").addEventListener("click", function() {
        context.strokeStyle = color = "lightgrey";
        currentColor.style.background = color;
    });

     document.getElementById("pink").addEventListener("click", function() {
        context.strokeStyle = color = "pink";
        currentColor.style.background = color;
    });

     document.getElementById("lightsalmon").addEventListener("click", function() {
        context.strokeStyle = color = "lightsalmon";
        currentColor.style.background = color;
    });

     document.getElementById("lightyellow").addEventListener("click", function() {
        context.strokeStyle = color = "lightyellow";
        currentColor.style.background = color;
    });

     document.getElementById("lime").addEventListener("click", function() {
        context.strokeStyle = color = "lime";
        currentColor.style.background = color;
    });

     document.getElementById("lightblue").addEventListener("click", function() {
        context.strokeStyle = color = "lightblue";
        currentColor.style.background = color;
    });

     document.getElementById("fuchsia").addEventListener("click", function() {
        context.strokeStyle = color = "fuchsia";
        currentColor.style.background = color;
    });

/*
|--------------------------------------------------------------------------
| Paint Sizes
|--------------------------------------------------------------------------
|   1st : Save the current canvas as an image
|   2nd : return this image as the new canvas resized
|       
*/
    document.getElementById("sizeBtn").addEventListener("click", function() {
        if (canvasWidth.value < 20 || canvasHeight.value < 20) {
            alert('Size cannot be less than 20x20 !');
        } else {
            var canvasImg = new Image;
            canvasImg.src = canvas.toDataURL();
            canvasImg.onload = function() {
                canvas.width = canvasWidth.value;
                canvas.height = canvasHeight.value;
                context.drawImage(canvasImg, 0,0);
            }
        }
    });

/*
|--------------------------------------------------------------------------
| Input Color
|--------------------------------------------------------------------------
|
*/
    document.getElementById("chooseColor").addEventListener("change", function() {
        context.strokeStyle = color = chooseColor.value;
        currentColor.style.background = color;
    });

/*
|--------------------------------------------------------------------------
| Loading Images Functions
|--------------------------------------------------------------------------
|
*/

    document.getElementById('addImg').addEventListener('change', function(event) {
        var image = new Image;
        image.src = URL.createObjectURL(event.target.files[0]);
        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0,0);
        }
    });

/*
|--------------------------------------------------------------------------
| Saving the project as file
|--------------------------------------------------------------------------
|
*/

    var saveImg = document.getElementById('saveImg');
    var name = document.getElementById('titleFile').value;

    if (name === "") {
        name = "defaultName";
        saveImg.addEventListener('click', function() {
            saveImg.setAttribute('download', name+'.png');
            saveImg.setAttribute('href', canvas.toDataURL("image/png"));    
        });

    } else {
        saveImg.addEventListener('click', function() {
            saveImg.setAttribute('download', name+'.png');
            saveImg.setAttribute('href', canvas.toDataURL("image/png"));
        });
    }


/*
|--------------------------------------------------------------------------
| Get the cursor position
|--------------------------------------------------------------------------
|   1st : We show the cursor position inside the canvas
|   2nd : We hide the cursor position when the cursor is out of the canvas.
|
*/

    canvas.addEventListener('mousemove', function(event) {
        var posVal = "X: " + mouse_x + "<br> Y: " + mouse_y;
        document.getElementById("mousePos").innerHTML = posVal;
    });
    
    canvas.addEventListener('mouseout', function() {
        document.getElementById("mousePos").innerHTML = "";
    });