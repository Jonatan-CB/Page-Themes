const body = document.querySelector('body')
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');
const logo = document.querySelector("#image-logo");

// Show Sidebar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
});

// Close Sidebar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = '';
});

// Change Theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    if(body.classList.contains("dark-theme-variables")){
        logo.src = "images/logo-white.png";
    }else{
        logo.src = "images/logo.png";
    }
});