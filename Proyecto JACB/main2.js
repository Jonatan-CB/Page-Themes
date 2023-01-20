const body = document.querySelector('body'),
      sidebar = body.querySelector('header'),
      toggle = body.querySelector(".toggle"),
      logo = body.querySelector(".image-logo"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
        logo.src = "images/logo-white.png";
    }else{
        modeText.innerText = "Dark mode";
        logo.src = "images/logo.png";
    }
});