var inputValue = document.getElementById("inputBox").value
let inputItem = document.getElementById("inputBox");

function clearAll(){
    inputItem.value = "";
}

function deleteNum(){
    inputItem.value = inputItem.value.slice(0, -1);
}
function addToDisplay(value){
    inputItem.value += value;
}
function calculateValue(){
    inputItem.value = eval(inputItem.value); 
}
function squareRoot(){
    inputItem.value = Math.sqrt(inputItem.value);
}