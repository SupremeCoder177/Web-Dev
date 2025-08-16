function add(a, b){
    return a + b;
}
function area(radius){
    return PI * (radius ** 2)
}

const PI = 22 / 7;
const btn = document.getElementById("myBtn");
btn.onclick = () => {
    console.log("A button was clicked.");
}

console.log(area(10));

let _name = "123";
let password = 123;

// this prints true, because '==' only checks the contents, not the type
console.log(_name == password);

// this prints false, because '===' checks the type as well
console.log(_name === password);
