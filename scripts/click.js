
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

 // let btn_them = document.querySelector('.btn_xemthem');
//  let body = document.querySelector('.body-style');
// btn_them.onclick =()=> {
    //     body.classList.add('d-n');
    //     console.log( body.classList.add('d-n'));
    // }
    function myFunction(){
        let body = document.querySelector('.body-style');
        let ifream = document.querySelector('.iframe');
        body.style.display = 'none';
        ifream.style.display = 'block';
}
document.querySelector('.btn_xemthem').addEventListener('click', myFunction);

let dong = document.querySelector('btn_dong');
let body = document.querySelector('.body-style');
let ifream = document.querySelector('.iframe');
function Dong(){
    let body = document.querySelector('.body-style');
    let ifream = document.querySelector('.iframe');
    body.style.display = 'flex';
    ifream.style.display = 'none';
}
document.querySelector('.btn_dong').addEventListener('click', Dong);






