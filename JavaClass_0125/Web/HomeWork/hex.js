const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function changeColor(){
    let colorCode = '#';
    for (let i = 0 ; i <= 5 ; i++){
        let codeOrder = Math.floor(Math.random() * hex.length);
        colorCode += hex[codeOrder]; 
    }
    document.body.style.backgroundColor = colorCode;
    document.getElementById("color").innerHTML = colorCode;
}
