const incBtn = document.getElementById("inc");
const resetBtn = document.getElementById("reset");
const decBtn = document.getElementById("dec");

const label = document.getElementById("count");

incBtn.onclick = () => {
    let count = label.textContent;
    count = Number(count);
    label.textContent = count + 1;
}

decBtn.onclick = () => {
    let count = label.textContent;
    count = Number(count);
    label.textContent = count - 1;
}

resetBtn.onclick = () => {
    label.textContent = 0;
}