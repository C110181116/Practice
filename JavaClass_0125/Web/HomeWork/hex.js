const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function changeColor(){
    var code = [];
    for (var i = 0 ; i <= 5 ; i++){
        var codeOrder = Math.floor(Math.random() * hex.length);
        code[i] = hex[codeOrder]; 
    }
    var colorCode = '#';
    for (var i = 0 ; i < code.length ; i++){
        colorCode += code[i];
    }
    document.body.style.backgroundColor = colorCode;
    document.getElementById("color").innerHTML = colorCode;
}
