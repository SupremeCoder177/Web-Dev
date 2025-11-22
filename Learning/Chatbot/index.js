const input = document.querySelector("#user-input");
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const NUM_STARS = 100;

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;


const responses_index_val = {
    0 : "Hello, how are you today ?",
    1 : "I know, how about this. Why was 6 afraid of 7 ? Because 7 8 9, get it 🤣? ",
    2 : "The weather today is really nice and clear .",
    3 : "Goodbye, I am always here to chat.",
    4 : "Why are you sad ?",
    5 : "Oh do tell me, what happened? Did you win the lottery ??",
    6 : "Oh I'm sorry to hear that .",
    7 : "I am so happy for you.",
    8 : "Sorry I didn't get that."
}

const responses = {
    "hello" : 0,
    "hi" : 0,
    "joke" : 1,
    "weather" : 2,
    "sad" : 4,
    "happy" : 5,
    "bye"  : 3,
    "goodbye" : 3
}

function ask(){
    const val = input.value;

    if(!val){
        return;
    }else{
        add_chat_card(val, sender = "user");
        add_chat_card(get_res(val), sender = "bot");
    }
}


function get_res(query){
    const chars = query.split(" ");
    
    for(let i = 0; i < chars.length; i++){
        const temp = chars[i].toLowerCase();
        for(let res in responses){
            if(res === temp){
                return responses_index_val[responses[res]];
            }
        }
    }
    return responses_index_val[8];
}


function add_chat_card(message, sender){
    const div = document.querySelector(".messages");
    const card = document.createElement("div");
    card.classList.add("message");

    const text = document.createElement("p");
    text.classList.add("card-text");

    text.innerText = message;

    const img = document.createElement("img");
    img.classList.add("card-img");
    if(sender === "user"){
        img.src = "Images/user-default.png";
    }else{
        img.src = "Images/bot.png";
    }

    if(sender === "bot"){
        card.appendChild(img);
        card.appendChild(text);
    }else{
        card.appendChild(text);
        card.appendChild(img);
    }

    div.appendChild(card);
}


class Star{

    constructor(x, y, dx, dy){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }

    draw(){
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, 1, 1);
    }

    update(){
        this.x += this.dx;
        this.y += this.dy;

        if(this.x > WIDTH){
            this.x = -100;
        }
        if(this.y > HEIGHT){
            this.y = - 100;
        }
    }
}

let stars = []

for(let i = 0; i < NUM_STARS; i++){
    let x = Math.random() * WIDTH;
    let y = Math.random() * HEIGHT;
    let dx = Math.random() * 1;
    let dy = Math.random() * 1;
    let star = new Star(x, y, dx, dy);
    stars.push(star);
}


const animate = () => {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    requestAnimationFrame(animate);

    for(let i = 0; i < NUM_STARS; i++){
        stars[i].update();
        stars[i].draw();
    }
}


animate();