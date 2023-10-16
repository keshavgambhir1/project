let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');

}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
let loginForm = document.querySelector('.login');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    loginForm.classList.remove('active');
} 