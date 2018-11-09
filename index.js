var calc = document.getElementById("calc");


calc.addEventListener("click", function(){
    var sideA = Number(document.getElementById("sideA").value);
    var sideB = Number(document.getElementById("sideB").value);
    var sideC = Number(document.getElementById("sideC").value);
    var perim = (sideA + sideB + sideC);
    var p = perim/2;
    var a = p-sideA;
    var b = p-sideB;
    var c = p-sideC;
    var area = Math.sqrt(p*a*b*c);

    console.log(area);

});


;



