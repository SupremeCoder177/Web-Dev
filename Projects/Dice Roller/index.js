
const output = document.querySelector(".output");
const error = document.getElementById("errorLabel");
const images = [
    "Dice Images/1.png",
    "Dice Images/2.png",
    "Dice Images/3.png",
    "Dice Images/4.png",
    "Dice Images/5.png",
    "Dice Images/6.png"
]


function rollDice(){
    error.innerHTML = "";
    const numDice = document.getElementById("numOfDice").value;
    
    if(numDice <= 0){
        error.innerHTML = "Number of dice cannot be less than 1";
    }else if(numDice > 6){
        error.innerHTML = "Number of dice cannot be more than 6"
    }else {
        let dices = [];
        for(let i = 0; i < numDice; i++){
            dices.push(Math.floor(Math.random() * 6));
        }

        output.innerHTML = "";

        dices.forEach(element => {
            let img = document.createElement("img");
            img.src = images[element];
            img.classList.add("diceImage");
            output.appendChild(img);
        })
    }
}