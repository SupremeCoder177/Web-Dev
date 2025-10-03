const canvas = document.getElementById("canvas");

// this is how you access the window width and height
var window_height = window.innerHeight;
var window_width = window.innerWidth;

// this is how you set the canvas width and height
canvas.width = window_width;
canvas.height = window_height;

// setting the context of the canvas
let context = canvas.getContext("2d");

// creating rectangles

// changing the fill color
context.fillStyle = "red";

// drawing the rectable
context.fillRect(0, 0, 100, 200);

// again changing the color
context.fillStyle = "blue";
context.fillRect(200, 400, 100, 200);

// creating circles

context.fillStyle = "yellow";

// drawing a circle
context.beginPath();

// setting the color
context.strokeStyle = "red"
// setting the line width
context.lineWidth = 5;
// drawing the circle
context.arc(400, 100, 50, 0, Math.PI * 2, false);
// applying the stroke
context.stroke();
// ending the path
context.closePath();


//let's do something fun

class Circle{

    constructor(xpos, ypos, radius, color, text, speed){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;

        this.dx = speed;
        this.dy = speed;
    }

    draw(context){
        // drawing the circle
        context.beginPath()
        context.strokeStyle = this.color;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();

        // writing the text
        context.fillStyle = this.color;
        context.textAlgin = "center";
        context.textBaseline = "middle";
        context.font = "20px sans-serif";
        context.fillText(this.text, this.xpos, this.ypos);
        
    }

    update(context){
        if((this.xpos + this.radius) > window_width || (this.xpos - this.radius) < 0){
            this.dx = - this.dx;
        }

        if ((this.ypos + this.radius) > window_height || (this.ypos - this.radius) < 0){
            this.dy = - this.dy;
        }

        this.draw(context);
        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}

//let myCircle = new Circle(200, 200, 20, "cyan")
//myCircle.draw(context)


// drawing 10 circles on the screen
// for(var i = 0; i < 10; i++){
//     x = Math.random() * window_width;
//     y = Math.random() * window_height;
//     let circle = new Circle(x, y, 40, "black", i + 1);
// }

x = Math.random() * window_width;
y = Math.random() * window_height;

let myCircle = new Circle(x, y, 30, "black", "Text", 2);


// this is basically the function which calls itself
// after a certain amount of time, like 1/ 60 s for 60fps
// so this is the game loop
let updateCircle = () => {
    requestAnimationFrame(updateCircle);
    context.clearRect(0, 0, window_width, window_height);
    myCircle.update(context);
}

updateCircle();