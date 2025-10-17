let canvas = document.querySelector(".myCanvas");

const window_width = window.innerWidth;
const window_height = window.innerHeight;
const number_of_circles = 10;

canvas.width = window_width;
canvas.height = window_height;

let context = canvas.getContext("2d");

// context.fillStyle = "red";
// context.fillRect(0, 0, 100, 200);

class Circle{

    constructor(x, y, radius, speed, color){
        this.x = x;
        this.y = y;
        this.x_speed = speed;
        this.y_speed = speed;
        this.color = color;
        this.radius = radius;
    }

    draw(context){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.stroke();
    }

    move(){
        this.x += this.x_speed;
        this.y += this.y_speed;
        if(this.x > window_width || this.x < 0) this.x_speed = -this.x_speed;
        if(this.y > window_height || this.y < 0) this.y_speed = -this.y_speed;
    }

    update(context){
        this.move();
        this.draw(context);
    }

    get_distance(circle1, circle2){
        return Math.sqrt(
            Math.pow((circle1.x - circle2.x), 2) +
            Math.pow((circle1.y - circle2.y), 2)
        );
    }

    check_collide(circle){
        let distance = this.get_distance(circle, this);
        if(distance < this.radius + circle.radius){
            console.log("Collided");
            this.x_speed = -this.x_speed;
            circle.x_speed = -circle.x_speed;
        }
    }
}

let circles = [];

for(let i = 0; i < number_of_circles; i ++){

    let x = Math.random() * window_width;
    let y = Math.random() * window_height;

    let circle = new Circle(x, y, 20, 5, "black");
    circles.push(circle);
}



let updateScreen = () => {
    context.clearRect(0, 0, window_width, window_height);
    requestAnimationFrame(updateScreen);
    
    for(let i = 0; i < number_of_circles; i++){
        circles[i].update(context);
    }

    for(let i = 0; i < number_of_circles; i++){
        for(let j = i + 1; j < number_of_circles; j++){
            if(i === j) continue;
            circles[i].check_collide(circles[j]);
        }
    }
}

updateScreen();


