var mult = document.getElementById("multiply");
var div = document.getElementById("divide");

function multiply(){
    let numOne = document.getElementById("numberOne").value;
    let numTwo = document.getElementById("numberTwo").value;

    document.getElementById("result").innerHTML = numOne * numTwo;
}

function divide(){
    let numOne = document.getElementById("numberOne").value;
    let numTwo = document.getElementById("numberTwo").value;

    document.getElementById("result").innerHTML = numOne / numTwo;
}

mult.addEventListener("click", function(){
    multiply();
});

div.addEventListener("click", function(){
    divide();
});