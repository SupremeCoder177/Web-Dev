const canvas = document.querySelector(".myCanvas");
const context = canvas.getContext("2d");

const width = window.innerWidth;
const height = window.innerHeight;
const TILE_SIZE = 100;
const GRAV = 0.5;

canvas.width = width;
canvas.height = height;

const MAP = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
];

class Player{

    constructor(x, y, color = 'red', width = 0.7 * TILE_SIZE, height = 1.6 * TILE_SIZE){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocity = [0, 0];
    }

    takeInput(key, pressed = true){
        switch(key){
            case "d":
                if(pressed) this.velocity[0] = 6;
                else this.velocity[0] = 0;
                break;
            case "a":
                if (pressed) this.velocity[0] = -6;
                else this.velocity[0] = 0;
                break;
            case "w":
                this.velocity[1] = -20;
                break;
        }
    }

    update(){
        this.velocity[1] += GRAV;
        
        this.y += this.velocity[1];
        if(this.check_collide()){
            this.y -= this.velocity[1];
            this.velocity[1] = 0;
        }
        
        this.x += this.velocity[0];
        if(this.check_collide()){
            this.x -= this.velocity[0];
            this.velocity[0] = 0;
        }

    }

    check_collide(){
        const start_x = Math.floor(this.x / TILE_SIZE);
        const start_y = Math.floor(this.y / TILE_SIZE);
        const end_x = Math.floor((this.x + this.width) / TILE_SIZE);
        const end_y = Math.floor((this.y + this.height) / TILE_SIZE);

        return tiles.check_collide(start_x, start_y) || tiles.check_collide(start_x, end_y) || tiles.check_collide(end_x, start_y) || tiles.check_collide(end_x, end_y);
    }

    draw(){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}


class TileManager{
    constructor(){
        this.map = [];
        for(let i = 0; i < MAP.length; i++){
            for(let j = 0; j < MAP[i].length; j++){
                if(MAP[i][j] === 1) this.map.push([j, i]);
            }
        }
    }

    draw(){
        context.fillStyle = "gray";
        this.map.forEach((tile) => {
            context.fillRect(tile[0] * TILE_SIZE, tile[1] * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        })
    }

    check_collide(x, y){
        for(let i = 0; i < this.map.length; i++){
            const tile = this.map[i];
            if(tile[0] === x && tile[1] === y) return true;
        }
        return false;
    }
}


let player = new Player(100, 40);
let tiles = new TileManager();


let run = () => {
    context.clearRect(0, 0, width, height);

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    tiles.draw();
    player.update();
    player.draw();

    requestAnimationFrame(run);
}

window.addEventListener("keydown", (event) => {
    player.takeInput(event.key);
})


window.addEventListener("keyup", (event) => {
    player.takeInput(event.key, pressed = false);
})

run();