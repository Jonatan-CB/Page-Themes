const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.bx-menu');
const arrow = document.querySelectorAll('.arrow');

for (let i = 0; i < arrow.length; i++)
{
    arrow[i].addEventListener("click", (e) =>{
        
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu")
    });
}

sidebarBtn.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
});