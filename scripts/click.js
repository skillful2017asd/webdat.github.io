
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".openbtn").style.display = "none"
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector(".openbtn").style.display = "flex";
}
let btnBar = document.querySelector('.btn-bar');
let menuNgang = document.querySelector('.menu_ngang');
let close = document.querySelector('.close-bar');

close.onclick =()=>{
    menuNgang.classList.remove('d-b');
}
btnBar.onclick = ()=>{
    menuNgang.classList.add('d-b');
}




