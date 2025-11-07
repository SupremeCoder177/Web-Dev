
const label = document.getElementById("output");
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = lowerChars.toUpperCase();
const numbers = "1234567890";
const specialChars = "!@#$%^&*()_+=-";
const joined = lowerChars + upperChars + numbers + specialChars;

function generatePassword(){
    const length = document.getElementById("length").value;
    
    if(length <= 10){
        label.innerHTML = 'Password length must be more than 10 characters';
    }else if(length >= 25){
        label.innerHTML = 'Password length cannot be more than 24 characters';
    }else {
        let string = "";
        for(let i = 0; i < length; i++){
            let index = Math.random() * (joined.length - 1);
            string += joined.charAt(index);
        }
        label.innerHTML = `${string}`;
    }
}