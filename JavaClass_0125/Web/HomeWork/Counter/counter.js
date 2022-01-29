let count = Number(document.getElementById("value").innerHTML);
function decrease(){
    document.getElementById("value").innerHTML = count - 1;
    count = Number(document.getElementById("value").innerHTML);
    if(count < 0){
        document.getElementById("value").style.color = 'red';
    }else if(count === 0){
        document.getElementById("value").style.color = 'black';
    }
}
function reset(){
    document.getElementById("value").innerHTML = 0;
    count = 0;
    document.getElementById("value").style.color = 'black';
}
function increase(){
    document.getElementById("value").innerHTML = count + 1;
    count = Number(document.getElementById("value").innerHTML);
    if(count > 0){
        document.getElementById("value").style.color = 'green';
    }else if(count === 0){
        document.getElementById("value").style.color = 'black';
    }
}