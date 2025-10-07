const canvas = document.querySelector(".stars");
const window_width = window.innerWidth;
const window_height = window.innerHeight;
const num_stars = 200;

console.log(window_width);

canvas.width = window_width;
canvas.height = window_height;

let context = canvas.getContext("2d");


class Star{

    constructor(x, y, speed, size, move_down, move_right){
        this.x = x;
        this.y = y;
        this.size = size;
        this.right = move_right;
        this.down = move_down;
        this.speed = speed;
    }

    draw(context){
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, this.size, this.size);
    }

    update(context){
        if(this.right) this.x += this.speed;
        else this.x -= this.speed;
        if(this.down) this.y += this.speed;
        else this.y -= this.speed;
        this.draw(context);


        if(this.right){
            if(this.x >= window_width + 200)this.x = -200;
        }else{
            if(this.x <= -200) this.x = window_width + 200;
        }
        if(this.down){
            if(this.y >= window_height + 200) this.y = -200;
            else{
                if(this.y <= -200) this.y = window_height + 200;
            }
        }
    }
}

let stars = []

for(let i = 0; i < num_stars; i++){
    x = Math.random() * window_width;
    y = Math.random() * window_height;

    speed = Math.random() * 1;
    size = Math.random() * 3 + 1;

    move_right = true;
    //if(Math.random() >= 0.5) move_right = false;
    move_down = true;
    //if(Math.random() >= 0.5) move_down = false;

    temp = new Star(x, y, speed, size, move_down, move_right);
    stars.push(temp);
}

const loop = ()  => {
    context.clearRect(0, 0, window_width, window_height);
    requestAnimationFrame(loop);

    for(let i = 0; i < num_stars; i++){
        stars[i].update(context);
    }

}

loop();