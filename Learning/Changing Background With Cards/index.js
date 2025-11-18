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

function change_bg(){
    const top_pixel_data = get_color_at(0, 0, this);
    const bottom_pixel_data = get_color_at(this.width, this.height, this);

    const color_top = `rgba(${top_pixel_data["red"]}, ${top_pixel_data["green"]}, ${top_pixel_data["blue"]}, ${top_pixel_data["alpha"]})`;
    const color_bottom = `rgba(${bottom_pixel_data["red"]}, ${bottom_pixel_data["green"]}, ${bottom_pixel_data["blue"]}, ${bottom_pixel_data["alpha"]})`;

    bg_rect.style.background = `
        linear-gradient(to bottom, ${color_top}, ${color_bottom})
    `;
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