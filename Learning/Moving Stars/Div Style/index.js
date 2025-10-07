const container = document.querySelector(".container");
const num_stars = 100;
const max_speed = 0.1;


class Star{

    constructor(x, y, speed, delta, container, delay, duration){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.delta = delta;

        this.div = document.createElement("div");
        this.div.classList.add("star");
        this.div.style.top = `${this.x}vh`;
        this.div.style.left = `${this.y}vw`;
        this.div.style.animationDelay = `${delay}s`;
        this.div.style.animationDuration = `${duration}s`
        container.appendChild(this.div);
    }

    update(){
        this.x += this.speed;
        this.y += this.speed;

        if(this.x > 100 + this.delta) this.x = - this.delta;
        if(this.y > 100 + this.delta) this.y = - this.delta;

        this.div.style.left = `${this.x}vw`;
        this.div.style.top = `${this.y}vh`;

    }
}

let stars = [];


for(let i = 0; i < num_stars; i++){

    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let speed = Math.random() * max_speed;
    let delta = Math.random() * 10;
    let delay = Math.random() * 3 + 1;
    let duration = Math.random() * 5 + 5;

    let star = new Star(x, y, speed, delta, container, delay, duration);
    stars.push(star);
}


let frameUpdate = () => {
    requestAnimationFrame(frameUpdate);
    for(let i = 0; i < num_stars; i++){
        stars[i].update();
    }
}

frameUpdate();