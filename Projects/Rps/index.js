let compete_points = 0;
let pointsSet = false;
let player_choice = "Nothing";

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
            <label id="player-choice">You have chosen ${player_choice}</label>
            <label id="computer-choice">The computer will choose as soon as you will.</label>
        </div>
        `
        pointsSet = true;
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

