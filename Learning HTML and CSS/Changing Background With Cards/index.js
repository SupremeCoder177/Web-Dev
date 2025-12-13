const dummy_canvas = document.createElement("canvas");
dummy_canvas.style.display = "none";
dummy_canvas.style.position = "absolute";

const ctx = dummy_canvas.getContext("2d");
const bg_rect = document.querySelector(".bg");

function get_pixel(x, y){
    const pixel = ctx.getImageData(x, y, 1, 1).data;

    const r = pixel[0];
    const g = pixel[1];
    const b = pixel[2];
    const a = pixel[3];

    return {
        "red": r,
        "green": g,
        "blue": b,
        "alpha": a
    }
}


function get_color_at(x, y, img){
    dummy_canvas.style.width = img.width;
    dummy_canvas.style.height = img.height;

    ctx.drawImage(img, x, y);
    
    return get_pixel(x, y);
}


const cards = {
    1: "Images/img1.jpeg",
    2: "Images/img2.jpeg",
    3: "Images/img3.jpeg",
    4: "Images/img4.jpeg",
    5: "Images/img5.jpeg",
    6: "Images/img6.jpg"
}


function get_color_string(pixel){
    return `rgba(${pixel["red"]}, ${pixel["green"]}, ${pixel["blue"]}, ${pixel["alpha"]})`;
}

function change_bg(){
    let x = Math.floor(Math.random() * this.width), y = 0;
    let colors = [];
    while(y < this.width){
        colors.push(get_color_string(get_color_at(x, y, this)))
        y += Math.floor(this.height / 5);
        x = Math.floor(Math.random() * this.width);
    }

    const full_color = `linear-gradient(to bottom, ${colors.join(",")})`;
    
    bg_rect.style.background = full_color;
}

function addCards(object){
    const container = document.querySelector(".container");
    for(let item in object){
        
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.classList.add("card-img");
        img.src = object[item];

        img.addEventListener("mousedown", change_bg);

        let btn_container = document.createElement("div");
        btn_container.classList.add("card-btn-container");

        let like_btn = document.createElement("button");
        like_btn.classList.add("card-btn");
        like_btn.classList.add("primary");
        like_btn.innerHTML = "Like";

        let comment_btn = document.createElement("button");
        comment_btn.classList.add("card-btn");
        comment_btn.classList.add("secondary");
        comment_btn.innerHTML = "Comment";

        btn_container.appendChild(like_btn);
        btn_container.appendChild(comment_btn);

        card.appendChild(img);
        card.appendChild(btn_container);

        container.appendChild(card);
    }
}

addCards(cards);