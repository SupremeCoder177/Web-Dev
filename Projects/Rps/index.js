let compete_points = 0;
let player_pts = 0;
let comp_points = 0;
let pointsSet = false;
let player_choice = "Nothing";

function getCompChoice(){
    let choices = ["Rock", "Paper", "Scissor"];
    let choice = Math.floor(Math.random() * 3);
    document.getElementById("computer-choice").innerHTML = `The computer chose ${choices[choice]}`;

    if(player_choice === choices[choice]) document.getElementById("result").innerHTML = "It's a draw !";
    else{
        if(player_choice === "Rock"){
            if(choices[choice] === "Scissor"){
                document.getElementById("result").innerHTML = "Yay you scored a point !";
                player_pts++;
            }else{
                document.getElementById("result").innerHTML = "Oh no you lost !";
                comp_points++;
            }
        }
        else if(player_choice === "Paper"){
            if(choices[choice] === "Scissor"){
                document.getElementById("result").innerHTML = "Oh no you lost !";
                comp_points++;
            }else{
                document.getElementById("result").innerHTML = "Yay you scored a point !";
                player_pts++;
            }
        }
        else if(player_choice === "Scissor"){
            if(choices[choice] === "Rock"){
                document.getElementById("result").innerHTML = "Yay you scored a point !";
                player_pts++;
            }else{
                document.getElementById("result").innerHTML = "Oh no you lost !";
                comp_points++;
            }
        }
    }

    document.getElementById("point-counter").innerHTML = `Points needed to win : ${compete_points - player_pts}`

    if(comp_points === compete_points){
        compete_points = 0;
        pointsSet = false;
        document.getElementById("play").innerHTML = `<label id="result"></label>`;
        document.getElementById("result").innerHTML = "You lost the game 😢, but you can try again 👍";
    }
    if(player_pts === compete_points){
        compete_points = 0;
        player_pts = 0;
        comp_points = 0;
        pointsSet = false;
        document.getElementById("play").innerHTML = `<label id="result"></label>`;
        document.getElementById("result").innerHTML = "You won! ✌";
    }
    
}

function insertPlayElements(){
    const div = document.getElementById("play");
    if(!pointsSet){
        div.innerHTML = `
        <label id="error-label"></label>
        <label id="play-label">Ok starting a game to compete for ${compete_points} points !</label>
        <div id="user-input">
            <label id="choice-prompt">Choose !</label>
            <button id="rock" type="radio" name="btn">Rock</button>
            <button id="paper" type="radio" name="btn">Paper</button>
            <button id="scissor" type="radio" name="btn">Scissors</button>
        </div>
        <div id="choice-output">
            <label id="point-counter"></label>
            <label id="player-choice">You have chosen ${player_choice}</label>
            <label id="computer-choice">The computer will choose as soon as you will.</label>
            <label id="result"></label>
        </div>
        `
        pointsSet = true;

        document.getElementById("rock").onclick = () => {
            player_choice = "Rock";
            document.getElementById("player-choice").innerHTML = `You have chosen ${player_choice}`;
            getCompChoice();
        }

        document.getElementById("paper").onclick = () => {
            player_choice = "Paper";
            document.getElementById("player-choice").innerHTML = `You have chosen ${player_choice}`;
            getCompChoice();
        }

        document.getElementById("scissor").onclick = () => {
            player_choice = "Scissor";
            document.getElementById("player-choice").innerHTML = `You have chosen ${player_choice}`;
            getCompChoice();
        }

    }else{
        document.getElementById("error-label").innerHTML = "You have already set the point count, finish this game first !";
    }
}



document.getElementById("submit").onclick = () => {
    const pts = Number(document.getElementById("points-count").value);
    if(pts && pts != 0){
        compete_points = pts;
        insertPlayElements();
    }
}

