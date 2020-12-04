
function start(){
let seconds = document.getElementById('s');
let ss = document.getElementById('ss');

let minutes = document.getElementById('min');
let mm = document.getElementById('mm');

let hours = document.getElementById('h');
let hh = document.getElementById('hh');

ss.textContent=seconds.value;
mm.textContent=minutes.value;
hh.textContent=hours.value;

let sec=seconds.value;
let hr=hours.value;
let min=minutes.value;

while(0<hr && 0<min && 0<sec)
{
    
    setTimeout(() => { 
if(min==0){
    hr--;
    min=59;
}

if(sec==0){
    min--;
    sec=60;
}


    sec--;


ss.textContent=sec;
mm.textContent=min;
hh.textContent=hr;
}, 1000);

}

}