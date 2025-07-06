let visitorcount =parseInt(localStorage.getItem('visitorcount'))||0;
document.getElementById('visitor-count').textContent = visitorcount;
document.getElementById('reset-but').addEventListener('click',()=>{
    visitorcount = 0;
    document.getElementById('visitor-count').textContent = visitorcount;
    localStorage.removeItem('visitorcount');
});
visitorcount++;
document.getElementById('visitor-count').textContent = visitorcount;
localStorage.setItem('visitorcount',visitorcount);
 
let menubar = document.querySelector('menu-bar');
let medin = document.querySelector(".med-in");
function showmenu(){
    medin.classList.toggle("active")
}
let visitorcount =parseInt(localStorage.getItem('visitorcount'))||0;
document.getElementById('visitor-count').textContent = visitorcount;
document.getElementById('reset-but').addEventListener('click',()=>{
    visitorcount = 0;
    document.getElementById('visitor-count').textContent = visitorcount;
    localStorage.removeItem('visitorcount');
});
visitorcount++;
document.getElementById('visitor-count').textContent = visitorcount;
localStorage.setItem('visitorcount',visitorcount);
 
let menubar = document.querySelector('menu-bar');
let medin = document.querySelector(".med-in");
function showmenu(){
    medin.classList.toggle("active")
}
let brandr = document.querySelector('bran-dr');
let banar = document.querySelector('.ban-ar');
function showbrander(){
    banar.classList.toggle("active")
}
