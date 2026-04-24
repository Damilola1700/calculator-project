let display = document. getElementById('output')


function addinput(add){
    display.value += add;
}

function equalstoo(){
    display.value = eval(display.value)
}

function clearInput(){
    display.value = "";
}