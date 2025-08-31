const _data = null;

window.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
    .then(res => {
        if(!res.ok) throw new Error("Data not found");
        return res.json();
        }
    )
    .then(data => {
        const table_body = document.querySelector("#table tbody");

        data.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.age}</td>
            `
            table_body.append(row);
        }
    );
    }).catch(err => console.log("Failed to load data.", err))
})

const addBtn = document.getElementById("add");
addBtn.onclick = () => {
    var name = "";
    var age = 0;
    try{
    name = document.getElementById("nameInput").value;
    age = document.getElementById("ageInput").value;
    }catch(err){
        console.log(err);
    }
    const table = document.querySelector("#table tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
    `
    table.appendChild(row);
}
