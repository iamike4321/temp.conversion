function convert(degree) {
    var x;
    if (degree == "C") {x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = x.toFixed(2);}
    else {x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = x.toFixed(2);}




}