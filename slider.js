var counter = 1;

document.getElementById('elore').onclick = function() {
    console.log("sajt");
};

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
       counter = 1;
    }
}, 5000);


