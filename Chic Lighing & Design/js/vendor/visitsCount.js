if(localStorage.pageVisits){
    localStorage.pageVisits=
    Number(localStorage.pageVisits)+1;
}
else{
localStorage.pageVisits =1;
}
document.getElementById("visitsCount").textContent
=localStorage.pageVisits;