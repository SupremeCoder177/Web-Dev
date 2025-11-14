const canvas = document.querySelector(".myCanvas");
const context = canvas.getContext("2d");

const width = window.innerWidth;
const height = window.innerHeight;
const TILE_SIZE = 100;
const GRAV = 0.5;

canvas.width = width;
canvas.height = height;

const MAP = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
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

    takeInput(key){
        switch(key){
            case "d":
                this.velocity[0] = 3;
                break;
            case "a":
                this.velocity[0] = -3;
                break;
            case "w":
                break;
        }
    }

    update(){
        this.velocity[1] += GRAV;

        if(this.check_collide(0, this.velocity[1])){
            this.velocity[1] = 0;
        }   

        this.x += this.velocity[0];
        this.y += this.velocity[1];
    }

    check_collide(delta_x, delta_y){
        const tile_x = Math.floor((this.x + delta_x) / TILE_SIZE);
        const tile_y = Math.floor((this.y + delta_y) / TILE_SIZE);
        const end_x = Math.floor((this.x + this.width) / TILE_SIZE);
        const end_y = Math.floor((this.y + this.height) / TILE_SIZE);
        
        return MAP[tile_y][tile_x] === 1 || MAP[tile_y][end_x] === 1 || MAP[end_y][tile_x] === 1 || MAP[end_y][end_x] === 1;
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

        console.log(this.map);
    }

    draw(){
        context.fillStyle = "gray";
        for(let tile in this.map){
            context.fillRect(tile[0] * TILE_SIZE, tile[1] * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }

    check_collide(x, y){
        return [x, y] in this.map;
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

run();