const container = document.getElementById("container");

function addCards(){
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            const card = document.createElement("div");
            card.className = "card";
            card.style = `width : ${element["width"]}`;
            card.innerHTML = `
            <label class="card-label">${element["text"]}</label>
            <img src=${element["path"]} class="card-image">
            `
            container.appendChild(card);
        });
    }).catch(err => console.log(`An error has occured while loading data ${err}`))
}

addCards();