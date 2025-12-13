document.addEventListener("DOMContentLoaded", () => {
    let stars = document.querySelector('.stars');
    for(let i = 0; i < 100; i++){
        let star = document.createElement('div');
        star.classList.add('star');

        let x = Math.random() * 100;
        let y = Math.random() * 100;

        star.style.top = `${y}vh`;
        star.style.left = `${x}vw`;
        star.style.position = 'absolute';

        let size = Math.random() * 5 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        const duration = Math.random() * 3 + 1;
        const delay = Math.random() * 2;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        console.log("adding...")

        stars.appendChild(star);
    }
})