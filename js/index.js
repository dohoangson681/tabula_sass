let navItems = document.querySelectorAll("#navbarSupportedContent .nav-item") ; 

console.log(navItems) ; 
for(let i = 0 ; i < navItems.length ; i++){
    navItems[i].addEventListener("click" ,  () => {
        document.querySelector(".nav-item.active").classList.remove('active') ; 
        navItems[i].classList.add("active") ; 
    }) ; 
    
}
window.addEventListener("scroll" , ()=>{
    let navBar = document.querySelector(".header") ; 
    navBar.classList.toggle("sticky" , window.scrollY > 50 ) ; 
})

