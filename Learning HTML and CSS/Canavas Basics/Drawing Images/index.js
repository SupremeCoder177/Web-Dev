const canvas = document.querySelector(".myCanvas");
let context = canvas.getContext("2d");

let img1 = new Image();
img1.src = "Images/emma-watson.jpg";
img1.onload = () => {
    context.drawImage(img1, 0, 0, 100, 100);
}

let img2 = new Image();
img2.src = "Images/model1.jpg";
img2.onload = () => {
    context.drawImage(img2, 100, 0, 100, 100);
}