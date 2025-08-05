let a = 10;
let b = 12;
let c = Math.max(a, b);

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`max(a,b) = ${c}`);

const name = window.prompt("Hello there !");
console.log(`Hello there ${name}`);

const age = Number(window.prompt("How old are you ?"));
if(age){
    if(age > 18){
        console.log("Well you are already an adult then, good for you !");
    }else{
        console.log("Well then here is some advice, never look for right person.");
    }
}else{
    console.log("Hey that's not a number !!");
    console.log("Ok fine don't tell me your age >:(");
}

//for in loop
let nums = [1, 2, 3, 4, 5];
for(let num in nums){
    console.log(num);
}
