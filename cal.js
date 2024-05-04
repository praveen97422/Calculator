const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
 
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function Enter(event) {
    var keyCode = event.keyCode || event.which;  
    if (keyCode == 13){
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
        }
 }}