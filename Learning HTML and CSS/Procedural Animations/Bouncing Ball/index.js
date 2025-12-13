const canvas = document.querySelector("#myCanvas");
const context = canvas.getContext("2d");

const height = window.innerHeight;
const width = window.innerWidth;

canvas.width = width;
canvas.height = height;

const ground_height = 200;
const ground = height - ground_height;

const run = () => {
    context.clearRect(0, 0, width, height);

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#646464ff"
    let x = 0;
    for(let y = height; y >= ground; y--){
        
        x += 3;
    }
    requestAnimationFrame(run);
}


run();