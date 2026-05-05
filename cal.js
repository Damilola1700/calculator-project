let display = document. getElementById('output')



function addinput(add){
    display.value += add;
}

function total(){
    display.value = eval(display.value)
}

function clearInput(){
    display.value = "";
}

function clearLast(){
    display.value = display.value.slice(0 ,-1);
}