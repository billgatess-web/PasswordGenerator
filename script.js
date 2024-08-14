let genButton = document.querySelector(".generate-button");
let copyImage = document.querySelector(".copy-img");

let inputBtn = document.querySelector(".input-button");

let length = 12;

let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
let lowerCase = "qwertyuiopasdfghjklzxcvbnm";
let number = "0123456789"
let symbols = "~!@#$%^&*()_+{}|:?><-=";

let allChars = upperCase + lowerCase + number + symbols;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbols[Math.floor(Math.random()* symbols.length)];

    while(password.length< length){
        password += allChars[Math.floor(Math.random()* allChars.length)]
    }

    inputBtn.value = password;
}

function copy(){
    inputBtn.select();
    document.execCommand("copy");
}